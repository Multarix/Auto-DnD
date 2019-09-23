/*
hit die: d8
primary skill: Charisma
saveing throws: Constitution & Charisma

--Proficiences--
Armor: None
Weapons: Daggers, Darts, Slings, Quarterstaffs, Light Crossbows
Tools: None
*/
const armor = "None";
const weapon = "Daggers, Darts, Slings, Quarterstaffs, Light Crossbows";
module.exports = async (character) => {
	character.class = "Sorcerer";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
