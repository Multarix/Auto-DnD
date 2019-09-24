const armor = "None";
const weapon = "Daggers, Darts, Slings, Quarterstaffs, Light Crossbows";
exports.run = async (character) => {

	character.class = "Sorcerer";
	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};

exports.info = {
	name: "sorcerer",
	aliases: ["sorc", "mage"],
};
