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
const skills = {
	mainStat: "wisdom",
	secondStat: false,
	saveThrow: "intelligence",
	miscStats: ["strength", "dexterity", "constitution", "charisma"],
};
exports.run = async (character) => {

	character.class = "Druid";
	character.inventory.tools = "Herbalism Kit";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.armor = gear.armor.name;
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "druid",
	aliases: [],
};
