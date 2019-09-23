module.exports = async (character) => {
	character.race = "Dragonborn";
	character.speed = 30;
	character.stats.strength += 2;
	character.stats.charisma += 1;
	return character;
};
