const weaponList = require("./weapons.json");
const armorList = require("./armor.json");
module.exports = (character, wTags, aTags) => {
	if(character.small) weaponList.filter(x => !x.properties.includes("heavy"));

	const viableWeapons = [];
	for(let i = 0; i < weaponList.length; i++){
		if(wTags.names.includes(weaponList[i].name)){ viableWeapons.push(weaponList[i]); continue; }
		if(wTags.simple && weaponList[i].simple){ viableWeapons.push(weaponList[i]); continue; }
		if(wTags.martial && !weaponList[i].simple){ viableWeapons.push(weaponList[i]); continue; }
	}
	let num = randomNumber(viableWeapons.length);
	const weapon = viableWeapons[num];
	console.log(weapon);
	if(aTags.shield && weapon.allowShield && Math.random() >= 0.75) weapon.name += " & Shield";

	const viableArmor = [];
	for(let i = 0; i < armorList.length; i++){
		if(aTags.types.length === 0 || !aTags.types.length) break;
		if(!armorList[i].metal && !aTags.metal){ viableArmor.push(armorList[i]); continue; }
		if(aTags.types.includes(armorList[i].type) && armorList[i].strength < character.stats.strength){ viableArmor.push(armorList[i]); continue; }
	}
	num = randomNumber(viableArmor.length);
	const armor = viableArmor[num];

	return { "weapon": weapon, "armor": armor };
};
