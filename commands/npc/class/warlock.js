/*
hit die: d6
primary skill: Charisma
saveing throws: Wisdom & Charisma

--Proficiences--
Armor: Light Armor
Weapons: Simple
Tools: None
*/
const armor = "Light Armor";
const weapon = "Simple";
module.exports = async (character) => {
	character.class = "Warlock";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
