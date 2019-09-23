/*
hit die: d10
primary skill: Strength OR Dexterity
saveing throws: Strength & Constitution

--Proficiences--
Armor: All Armor, Shields
Weapons: Simple Weapons, Martial Weapons
Tools: None
*/
const armor = "All Armor, Shields";
const weapon = "Simple & Martial";
module.exports = async (character) => {
	character.class = "Fighter";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
