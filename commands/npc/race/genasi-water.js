exports.run = async (character) => {
	character.race.name = "Water Genasi";
	character.race.link = "https://www.dndbeyond.com/races/genasi#WaterGenasi";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.wisdom += 1;
	return character;
};

exports.info = {
	name: "water",
	aliases: ["watergenasi"],
};
