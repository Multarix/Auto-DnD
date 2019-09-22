module.exports = (character) => {
	character.race = "human";
	character.speed = 30;
	character.strength += 1;
	character.dexterity += 1;
	character.constitution += 1;
	character.intelligence += 1;
	character.wisdom += 1;
	character.charisma += 1;
	return character;
};
