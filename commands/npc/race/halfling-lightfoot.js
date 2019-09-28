exports.run = async (character) => {
	character.race.name = "Lightfoot Halfling";
	character.race.link = "https://www.dndbeyond.com/races/halfling#LightfootHalfling";
	character.race.small = true;
	character.race.speed = 25;
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
