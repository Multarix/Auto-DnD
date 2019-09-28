exports.run = async (character) => {
	character.race.name = "Hill Dwarf";
	character.race.link = "https://www.dndbeyond.com/races/dwarf#HillDwarf";
	character.race.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.wisdom += 1;
	return character;
};

exports.info = {
	name: "hill",
	aliases: ["hilldwarf", "hill-dwarf"],
};
