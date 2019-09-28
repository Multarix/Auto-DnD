exports.run = async (character) => {
	character.race.name = "Swiftstride Shifter";
	character.race.link = "https://www.dndbeyond.com/races/shifter#Swiftstride";
	character.race.speed = 35;
	return character;
};

exports.stats = async (character) => {
	character.stats.chrisma += 1;
	character.stats.dexterity += 2;
	return character;
};

exports.info = {
	name: "swiftstride",
	aliases: ["swiftstrideshifter", "swiftstride-shifter"],
};
