exports.run = async (character) => {
	character.race.name = "Aasimar";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.charisma += 2;
	character.stats.wisdom += 1;
	return character;
};

exports.info = {
	name: "aasimar",
	aliases: ["aasim"],
};
