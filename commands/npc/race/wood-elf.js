module.exports = async (character) => {
	character.race = "Wood Elf";
	character.speed = 35;
	character.stats.dexterity += 2;
	character.stats.wisdom += 1;
	return character;
};