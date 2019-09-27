exports.run = async (character) => {
	character.race = "Dragonborn";
	character.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.strength += 2;
	character.stats.charisma += 1;
	return character;
};

exports.info = {
	name: "dragonborn",
	aliases: ["dragon", "born"],
};
