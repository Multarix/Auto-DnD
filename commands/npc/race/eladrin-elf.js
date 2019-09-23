module.exports = async (character) => {
	character.race = "Eladrin Elf";
	character.speed = 30;
	character.stats.dexterity += 2;
	character.stats.intelligence += 1;
	return character;
};
