exports.run = async (character) => {
	character.race = "Stout Halfling";
	character.small = true;
	character.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.constitution += 1;
	return character;
};

exports.info = {
	name: "stout-halfling",
	aliases: ["stout", "stouthalfling"],
};
