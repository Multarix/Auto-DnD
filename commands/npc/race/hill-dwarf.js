module.exports = async (character) => {
	character.race = "Hill Dwarf";
	character.speed = 25;
	character.stats.constitution += 2;
	character.stats.wisdom += 1;
	return character;
};