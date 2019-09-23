/*
hit die: d8
primary skill: Dexterity
saveing throws: Dexterity & Intelligence

--Proficiences--
Armor: Light
Weapons: Simple, Hand Crossbows, Longswords, Rapiers, Shortswords
Tools: Thieves Tools
*/
const armor = "Light Armor";
const weapon = "Simple, Hand Crossbows, Longswords, Rapiers, Shortswords";
module.exports = async (character) => {
	character.stats.class = "Rogue";

	character.inventory.armor = armor;
	character.inventory.weapon = weapon;
	character.inventory.tools = "Thieves Tools";

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	for(let i = 0; i < 27; i++){
		const number = Math.floor(Math.random() * 100 + 1);
		if(number <= 30){	// 30% of points
			character.stats.strength += 1;
			if(character.stats.strength >= 14) i += 1;
			continue;
		}
		if(number <= 43){	// 13% of points
			character.stats.dexterity += 1;
			if(character.stats.dexterity >= 14) i += 1;
			continue;
		}
		if(number <= 68){	// 25% of points
			character.stats.constitution += 1;
			if(character.stats.constitution >= 14) i += 1;
			continue;
		}
		if(number <= 75){	// 7% of points
			character.stats.intelligence += 1;
			if(character.stats.intelligence >= 14) i += 1;
			continue;
		}
		if(number <= 87){	// 12% of points
			character.stats.wisdom += 1;
			if(character.stats.wisdom >= 14) i += 1;
			continue;
		}
		if(number <= 100){	// 13% of points
			character.stats.charisma += 1;
			if(character.stats.charisma >= 14) i += 1;
			continue;
		}
	}

	return character;
};
