module.exports = async (character) => {
	character.race = "Tiefling";
	character.speed = 30;
	character.stats.charisma += 2;
	character.stats.intelligence += 1;
	return character;
};
