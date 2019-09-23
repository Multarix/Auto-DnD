module.exports = async (character) => {
	character.race = "Mountain dwarf";
	character.speed = 25;
	character.stats.constitution += 2;
	character.stats.strength += 2;
	return character;
};
