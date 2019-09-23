/*
hit die: d10
primary skill: Strength & Charisma
saveing throws: Wisdom & Charisma

--Proficiences--
Armor: All Armor, Shields
Weapons: Simple & Martial
Tools: None
*/
const armor = "All Armor, Shields";
const weapon = "Simple & Martial";
module.exports = async (character) => {
	character.class = "Paladin";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
