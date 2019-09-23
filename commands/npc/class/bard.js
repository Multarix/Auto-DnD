/*
hit die: d8
primary skill: charisma
saveing throws: dexterity & charisma

--Proficiences--
Armor: Light
Weapons: Simple, Hand Crossbows, Longswords, Rapiers, Shortswords
Tools: 3 Musical Instruments
*/
const armor = "Light Armor";
const weapon = "Simple, Hand Crossbows, Longswords, Rapiers, Shortswords";
const tools = "3 Musical Instruments";
module.exports = async (character) => {
	character.class = "Bard";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;
	character.inventory.tools = tools;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
