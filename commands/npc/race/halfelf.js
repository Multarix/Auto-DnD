exports.run = async (character) => {
	character.race.name = "Half-Elf";
	character.race.link = "https://www.dndbeyond.com/races/half-elf";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.charisma += 2;

	const a = ["strength", "dexterity", "intelligence", "wisdom", "constitution"];
	let s = a.random();	// Grab a random stat from the array
	character.stats[s] += 1;	// Apply +1 to that stat
	a.splice(a.indexOf(s), 1);	// Remove the stat that was increased from the array

	s = a.random();	// Grab a random stat from the array
	character.stats[s] += 1;	// Apply +1 to that stat
	return character;
};

exports.info = {
	"name": "half-elf",
	"aliases": ["halfelf"],
};
