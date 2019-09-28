exports.run = async (character) => {
	character.race.name = "Wood Elf";
	character.race.link = "https://www.dndbeyond.com/races/elf#WoodElf";
	character.race.speed = 35;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.wisdom += 1;
	return character;
};

exports.info = {
	name: "wood",
	aliases: ["woodelf", "wood-elf"],
};
