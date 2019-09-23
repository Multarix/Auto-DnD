/*
hit die: d10
primary skill: Dexterity & Wisdom
saveing throws: Strength & Dexterity

--Proficiences--
Armor: Light, Medium & Shields
Weapons: Simple & Martial
Tools: None
*/
const armor = "Light & Medium Armor, Shields";
const weapon = "Simple & Martial";
module.exports = async (character) => {
	character.class = "Ranger";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
