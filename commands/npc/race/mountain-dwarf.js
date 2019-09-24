exports.run = async (character) => {
	character.race = "Mountain dwarf";
	character.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.strength += 2;
	return character;
};

exports.info = {
	name: "mountain-dwarf",
	aliases: ["mountain"],
};
