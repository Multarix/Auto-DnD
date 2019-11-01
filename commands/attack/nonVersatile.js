const failure = require("./failure.js");
module.exports = async (client, embed, weapon, modifier) => {

	const singleAttack = weapon.damageAmount.split("×");
	const attack = {
		sDie: "",
		singleTimes: parseInt(singleAttack[0]),
		singleDie: singleAttack[1]
	};

	let hit = d20();
	if(hit === 1)	return await failure(embed);
	if(hit === 20){
		hit =	`${hit} - Critical Hit!`;
		attack.singleTimes *= 2;
		embed.addField("Attack Roll (1×D20 + Modifiers)", `**Roll:** ${hit}
		\u200b`.replace(/\n(\t+)/g, "\n"), false);
	} else {
		const link = "https://roll20.net/compendium/dnd5e/Character%20Advancement#content";
		embed.addField("Attack Roll (1×D20 + Modifiers)", `[**Proficiency Bonus**](${link})
		**Roll:** ${hit}
		**Modifier:** ${modifier}
		**Total:** ${hit + modifier}
		\u200b`.replace(/\n(\t+)/g, "\n"), false);
	}
	if(weapon.name.toLowerCase() === "net") return embed;

	attack.sDie += `${attack.singleTimes}×${attack.singleDie}`.replace("()", "").toUpperCase();

	const sRolls = [];
	let totalSDamage = 0;
	try {
		for(let i = 0; i < attack.singleTimes; i++){
			const singleNumber = eval(`${attack.singleDie}()`);
			sRolls.push(singleNumber);
			totalSDamage += singleNumber;
		}
	} catch (e){
		client.log(e.message, "Error", client.shard);
		return null;
	}
	let singleHanded = totalSDamage + modifier;
	if(singleHanded < 0) singleHanded = 0;

	const modStr = (modifier >= 0) ? `+${modifier}` : modifier;
	const rollString = `${sRolls.join(", ")} (${modStr})`;
	const totalString = totalSDamage + modifier;

	embed.addField(`Dice Rolls (${attack.sDie})`, rollString, true)
		.addField("Total Damage", totalString, true);
	return embed;
};
