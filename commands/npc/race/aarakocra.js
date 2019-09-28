exports.run = async (character) => {
	character.race.name = "Aarakocra";
	character.race.link = "https://www.dndbeyond.com/races/aarakocra";
	character.race.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.wisdom += 1;
	return character;
};

exports.info = {
	name: "aarakocra",
	aliases: ["arra", "bird"],
};
