exports.run = async (character) => {
	character.race.name = "Wildhunt Shifter";
	character.race.link = "https://www.dndbeyond.com/races/shifter#Wildhunt";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.wisdom += 2;
	character.stats.dexterity += 1;
	return character;
};

exports.info = {
	name: "wildhunt",
	aliases: ["wildhuntshifter", "wildhunt-shifter"],
};
