const armor = "Light Armor";
const weapon = "Simple, Hand Crossbows, Longswords, Rapiers, Shortswords";
const tools = "3 Musical Instruments";
exports.run = async (character) => {

	character.class = "Bard";
	character.inventory.armor = armor;
	character.inventory.weapon = weapon;
	character.inventory.tools = tools;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};

exports.info = {
	name: "bard",
	aliases: ["musician", "cunt", "worst", "horrible", "shit", "trash", "annoying", "garbage"],
};
