exports.run = async (character) => {
	character.race.name = "Stout Halfling";
	character.race.link = "https://www.dndbeyond.com/races/halfling#StoutHalfling";
	character.race.small = true;
	character.race.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.constitution += 1;
	return character;
};

exports.info = {
	name: "stout",
	aliases: ["stout-halfling", "stouthalfling"],
};
