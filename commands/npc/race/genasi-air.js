exports.run = async (character) => {
	character.race.name = "Air Genasi";
	character.race.link = "https://www.dndbeyond.com/races/genasi#AirGenasi";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.dexterity += 1;
	return character;
};

exports.info = {
	name: "air",
	aliases: ["airgenasi"],
};
