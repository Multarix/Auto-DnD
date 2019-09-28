exports.run = async (character) => {
	character.race.name = "Beasthide Shifter";
	character.race.link = "https://www.dndbeyond.com/races/shifter#Beasthide";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.dexterity += 1;
	return character;
};

exports.info = {
	name: "beasthide",
	aliases: ["beasthideshifter", "beasthide-shifter"],
};
