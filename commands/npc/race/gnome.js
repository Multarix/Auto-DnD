exports.run = async (character) => {
	character.race = "Gnome";
	character.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.intelligence += 2;
	character.stats.constitution += 1;
	return character;
};

exports.info = {
	name: "gnome",
	aliases: [],
};
