exports.run = async (character) => {
	character.race.name = "Earth Genasi";
	character.race.link = "https://www.dndbeyond.com/races/genasi#EarthGenasi";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.strength += 1;
	return character;
};

exports.info = {
	name: "earth",
	aliases: ["earthgenasi"],
};
