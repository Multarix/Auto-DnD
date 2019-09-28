exports.run = async (character) => {
	character.race.name = "Changeling";
	character.race.link = "https://www.dndbeyond.com/races/changeling";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.charisma += 2;
	const stat = (Math.random() > 0.5) ? "intelligence" : "dexterity";
	character.stats[stat] += 1;
	return character;
};

exports.info = {
	name: "changeling",
	aliases: [],
};
