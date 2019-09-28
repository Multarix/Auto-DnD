exports.run = async (character) => {
	character.race.name = "Fire Genasi";
	character.race.link = "https://www.dndbeyond.com/races/genasi#FireGenasi30";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.intelligence += 1;
	return character;
};

exports.info = {
	name: "fire",
	aliases: ["firegenasi"],
};
