const armor = "Light & Medium Armor, Shields";
const weapon = "Simple & Martial";
exports.run = async (character) => {

	character.class = "Ranger";
	character.inventory.armor = armor;
	character.inventory.weapon = weapon;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	return character;
};

exports.info = {
	name: "ranger",
	aliases: ["archer"],
};
