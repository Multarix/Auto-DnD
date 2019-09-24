const armor = "Light Armor";
const weapon = "Simple, Hand Crossbows, Longswords, Rapiers, Shortswords";
exports.run = async (character) => {

	character.stats.class = "Rogue";
	character.inventory.armor = armor;
	character.inventory.weapon = weapon;
	character.inventory.tools = "Thieves Tools";

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};

exports.info = {
	name: "rogue",
	aliases: ["thief"],
};
