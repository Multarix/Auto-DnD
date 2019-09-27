exports.run = async (character) => {
	character.race = "Light-Foot Halfling";
	character.small = true;
	character.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.dexterity += 2;
	character.stats.charisma += 1;
	return character;
};

exports.info = {
	name: "lightfoot",
	aliases: ["lightfoothalfling", "lightfoot-halfling"],
};
