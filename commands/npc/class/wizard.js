/*
hit die: d6
primary skill: Intelligence
saveing throws: Intelligence & Wisdom

--Proficiences--
Armor: none
Weapons: Daggers, Darts, Slings, Quarterstaffs, Light Crossbows
Tools: None
*/
const armor = "None";
const weapon = "Daggers, Darts, Slings, QuarterStaffs, Light Crossbows";
module.exports = async (character) => {
	character.class = "Wizard";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
