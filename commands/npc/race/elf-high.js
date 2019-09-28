exports.run = async (character) => {
	character.race.name = "High Elf";
	character.race.link = "https://www.dndbeyond.com/races/elf#HighElf";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.intelligence += 1;
	return character;
};

exports.info = {
	name: "high",
	aliases: ["highelf", "high-elf"],
};
