exports.run = async (character) => {
	character.race.name = "Kalshtar";
	character.race.link = "https://www.dndbeyond.com/races/kalashtar";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.wisdom += 1;
	const type = ["strength", "dexterity", "constitution", "intelligence", "charisma"];
	const stat = type[randomNumber(type.length)];
	character.stats[stat] += 1;
	return character;
};

exports.info = {
	name: "kalshtar",
	aliases: ["quori"],
};
