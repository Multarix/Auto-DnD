exports.run = async (character) => {
	character.race.name = "Gnome";
	character.race.link = "https://www.dndbeyond.com/races/gnome#RockGnome";
	character.race.small = true;
	character.race.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.intelligence += 2;
	character.stats.constitution += 1;
	return character;
};

exports.info = {
	name: "gnome",
	aliases: [],
};
