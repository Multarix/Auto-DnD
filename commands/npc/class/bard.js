const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": ["light"],
	"metal": true,
	"shield": false,
};
const tools = "3 Musical Instruments";
exports.run = async (character) => {

	character.class = "Bard";
	character.inventory.tools = tools;

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	const gear = inventory(character, wTags, aTags);
	character.inventory.armor = gear.armor.name;
	character.inventory.weapon = gear.weapon.name;
	return character;
};

exports.info = {
	name: "bard",
	aliases: ["musician", "cunt", "worst", "horrible", "shit", "trash", "annoying", "garbage"],
};
