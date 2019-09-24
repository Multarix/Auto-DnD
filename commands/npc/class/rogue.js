const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Hand Crossbow", "Longsword", "Mace", "Rapier", "Shortsword"],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light"],
	"metal": true,
	"shield": false,
};
exports.run = async (character) => {

	character.class = "Rogue";
	character.inventory.tools = "Thieves Tools";

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	const gear = inventory(character, wTags, aTags);
	character.inventory.armor = gear.armor.name;
	character.inventory.weapon = gear.weapon.name;
	return character;
};

exports.info = {
	name: "rogue",
	aliases: ["thief"],
};
