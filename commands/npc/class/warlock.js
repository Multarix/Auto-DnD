const armor = "Light Armor";
const weapon = "Simple";
exports.run = async (character) => {

	character.class = "Warlock";
	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};

exports.info = {
	name: "warlock",
	aliases: [],
};
