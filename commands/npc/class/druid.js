const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Club", "Dagger", "Dart", "Javelin", "Mace", "Quarterstaff", "Scimitar", "Sickle", "Sling", "Spear"],
	"simple": false,
	"martial": false,
};
const aTags = {
	"types": ["light", "medium"],
	"metal": false,
	"shield": true,
};
exports.run = async (character) => {

	character.class = "Druid";
	character.inventory.tools = "Herbalism Kit";

	for(const [key] of Object.entries(character.stats)){
		character.stats[key] += 2;
	}

	const gear = inventory(character, wTags, aTags);
	character.inventory.armor = gear.armor.name;
	character.inventory.weapon = gear.weapon.name;
	return character;
};

exports.info = {
	name: "druid",
	aliases: [],
};
