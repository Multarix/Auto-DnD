exports.run = async (character) => {
	character.race = "Half-Elf";
	character.speed = 30;
	character.stats.charisma += 2;

	const a = ["strength", "dexterity", "intelligence", "wisdom", "constitution"];
	let num = Math.floor(Math.random() * 4);
	let s = a[num];	// Grab the item in num's position from the array
	character.stats[s] += 1;	// Apply +1 to that item from the character stats

	a.splice(num, 1);	// Remove the stat that was increased from the array
	num = Math.floor(Math.random() * 3);
	s = a[num];	// Grab the item in num's position from the array
	character.stats[s] += 1;	// Apply +1 to that item from the character stats

	return character;
};

exports.info = {
	"name": "half-elf",
	"aliases": ["halfelf"],
};
