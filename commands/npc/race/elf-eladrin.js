exports.run = async (character) => {
	character.race.name = "Eladrin Elf";
	character.race.link = "https://www.dndbeyond.com/races/elf#EladrinVariant";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.intelligence += 1;
	return character;
};

exports.info = {
	name: "eladrin",
	aliases: ["eladrin-elf", "eladrinelf"],
};
