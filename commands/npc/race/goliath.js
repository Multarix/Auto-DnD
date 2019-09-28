exports.run = async (character) => {
	character.race.name = "Goliath";
	character.race.link = "https://www.dndbeyond.com/races/goliath";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.strength += 2;
	character.stats.constitution += 1;
	return character;
};

exports.info = {
	name: "goliath",
	aliases: ["giant"],
};
