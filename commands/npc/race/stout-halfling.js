module.exports = async (character) => {
	character.race = "Stout Halfling";
	character.speed = 25;
	character.stats.dexterity += 2;
	character.stats.constitution += 1;
	return character;
};
