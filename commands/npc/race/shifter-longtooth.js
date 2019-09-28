exports.run = async (character) => {
	character.race.name = "Longtooth Shifter";
	character.race.link = "https://www.dndbeyond.com/races/shifter#Longtooth";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.strength += 2;
	character.stats.dexterity += 1;
	return character;
};

exports.info = {
	name: "longtooth",
	aliases: ["longtoothshifter", "longtooth-shifter"],
};
