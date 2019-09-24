exports.run = async (character) => {
	character.race = "Wood Elf";
	character.speed = 35;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.wisdom += 1;
	return character;
};

exports.info = {
	name: "wood-elf",
	aliases: ["woodelf"],
};
