const armor = "None";
const weapon = "Simple & Shortswords";
const tools = "1 Artisan Tool or Musical Instrument";
exports.run = async (character) => {

	character.class = "Monk";
	character.inventory.armor = armor;
	character.inventory.weapon = weapon;
	character.inventory.tools = tools;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};

exports.info = {
	name: "monk",
	aliases: [],
};
