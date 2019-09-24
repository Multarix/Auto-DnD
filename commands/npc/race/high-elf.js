exports.run = async (character) => {
	character.race = "High Elf";
	character.speed = 30;
	character.stats.dexterity += 2;
	character.stats.intelligence += 1;
	return character;
};

exports.info = {
	name: "high-elf",
	aliases: ["highelf"],
};
