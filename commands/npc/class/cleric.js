/*
hit die: d8
primary skill: wisdom
saveing throws: wisdom & charisma

--Proficiences--
Armor: Light, Medium & Shields
Weapons: Simple
Tools: None
*/
const armor = "Light & Medium Armor, Shields";
const weapon = "Simple";
module.exports = async (character) => {
	character.class = "Cleric";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
