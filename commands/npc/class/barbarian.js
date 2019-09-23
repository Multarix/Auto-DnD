/*
SKYRIM LIKE LOOT TABLE FOR INVENTORY?

hit die: d12
primary skill: strength
saveing throws: strength & constitution

--Proficiences--
Armor: Light, Medium & Shields
Weapons: Simple & Martial
Tools: None
*/
const armor = "Light & Medium Armor, Shields";
const weapon = "Simple & Martial";
module.exports = async (character) => {
	character.class = "Barbarian";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	character.stats.forEach(s => { if(s !== "speed") s += 2; });

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};
