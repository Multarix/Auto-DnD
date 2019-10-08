const failure = require("./failure.js");
module.exports = async (client, embed, weapon, modifier) => {

	const singleAttack = weapon.damageAmount.split("×");
	const	versatileAttack = weapon.versatile.split("×");
	const attack = {
		sDieStr: "",
		singleTimes: parseInt(singleAttack[0]),
		singleDie: singleAttack[1],
		vDieStr: "",
		versatileTimes: parseInt(versatileAttack[0]),
		versatileDie: versatileAttack[1],
	};

	let hit = d20();
	if(hit === 1)	return await failure(embed);
	if(hit === 20){
		hit =	`${hit} - Critical Hit!`;
		attack.singleTimes *= 2;
		attack.versatileTimes *= 2;
	}
	embed.addField("Attack Roll (1×D20)", hit, false);

	attack.sDieStr += `${attack.singleTimes}×${attack.singleDie}`.replace("()", "").toUpperCase();
	attack.vDieStr += `${attack.versatileTimes}×${attack.versatileDie}`.replace("()", "").toUpperCase();

	const sRolls = [];
	const vRolls = [];
	let totalSDamage = 0;
	let totalVDamage = 0;
	try {
		for(let i = 0; i < attack.singleTimes; i++){
			const sNumber = eval(`${attack.singleDie}()`);
			sRolls.push(sNumber);
			totalSDamage += sNumber;

			const vNumber = eval(`${attack.versatileDie}()`);
			vRolls.push(vNumber);
			totalVDamage += vNumber;
		}
	} catch (e){
		client.log(e.message, "Error", client.shard);
		return null;
	}
	let singleHanded = totalSDamage + modifier;
	let twoHanded = totalVDamage + modifier;
	if(singleHanded < 0) singleHanded = 0;
	if(twoHanded < 0) twoHanded = 0;

	const modStr = (modifier >= 0) ? `+${modifier}` : modifier;
	const rollString = `**Single-Handed (${attack.sDieStr})**\n${sRolls.join(", ")} (${modStr})\n**Two-Handed (${attack.vDieStr})**\n${vRolls.join(", ")} (${modStr})`;
	const totalString = `\u200b\n${singleHanded}\n\u200b\n${twoHanded}`;

	embed.addField("Dice Rolls", rollString, true)
		.addField("Total Damage", totalString, true);
	return embed;
};
