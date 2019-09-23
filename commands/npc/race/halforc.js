module.exports = async (character) => {
	character.race = "Half-Orc";
	character.speed = 30;
	character.stats.strength += 2;
	character.stats.constitution += 1;
	return character;
};
