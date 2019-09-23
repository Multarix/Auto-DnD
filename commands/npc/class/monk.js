/*
hit die: d8
primary skill: Dexterity & Wisdom
saveing throws: Strength & Dexterity

--Proficiences--
Armor: None
Weapons: Simple & Shortswords
Tools: 1 Artisan Tool or Musical Instrument
*/
const armor = "None";
const weapon = "Simple & Shortswords";
const tools = "1 Artisan Tool or Musical Instrument";
module.exports = async (character) => {
	character.class = "Monk";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;
	character.inventory.tools = tools;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
