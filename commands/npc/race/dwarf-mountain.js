exports.run = async (character) => {
	character.race.name = "Mountain Dwarf";
	character.race.link = "https://www.dndbeyond.com/races/dwarf#MountainDwarf";
	character.race.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.strength += 2;
	return character;
};

exports.info = {
	name: "mountain",
	aliases: ["mountaindwarf", "mountain-dwarf"],
};
