exports.run = async (character) => {
	character.race = "Light-Foot Halfling";
	character.speed = 25;
	character.stats.dexterity += 2;
	character.stats.charisma += 1;
	return character;
};

exports.info = {
	name: "lightfoot",
	aliases: ["lightfoothalfling", "lightfoot-halfling"],
};
