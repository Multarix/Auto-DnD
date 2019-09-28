exports.run = async (character) => {
	character.race.name = "Tiefling";
	character.race.link = "https://www.dndbeyond.com/races/tiefling";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.charisma += 2;
	character.stats.intelligence += 1;
	return character;
};

exports.info = {
	name: "tiefling",
	aliases: [],
};
