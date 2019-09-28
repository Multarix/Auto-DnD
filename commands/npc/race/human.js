exports.run = async (character) => {
	character.race.name = "Human";
	character.race.link = "https://www.dndbeyond.com/races/human";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 1;
	}
	return character;
};

exports.info = {
	name: "human",
	aliases: [],
};
