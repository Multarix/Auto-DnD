exports.run = async (character) => {
	character.race = "Human";
	character.speed = 30;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 1;
	}
	return character;
};

exports.info = {
	name: "human",
	aliases: [],
};
