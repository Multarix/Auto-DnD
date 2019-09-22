module.exports = (character) => {
	character.race = "gnome";
	character.speed = 25;
	character.intelligence += 2;
	character.constitution += 1;
	return character;
};
