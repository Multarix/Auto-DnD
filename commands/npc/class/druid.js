/*
hit die: d8
primary skill: wisdom
saveing throws: Intelligence & wisdom

--Proficiences--
Armor: Light, Medium & Shields (Non-Metal)
Weapons: Clubs, Daggers, Darts, Javelins, Maces, Quarterstaffs, Scimitars, Sickles, Slings, Spears
Tools: Herbalism Kit
*/
const armor = "Light & Medium Armor, Shields (Non Metals)";
const weapon = "Clubs, Daggers, Darts, Javelins, Maces, Quarterstaffs, Scimitars, Sickles, Slings, Spears";
module.exports = async (character) => {
	character.class = "Druid";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;
	character.inventory.tools = "Herbalism Kit";

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
