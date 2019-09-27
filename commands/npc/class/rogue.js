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
const skills = {
	mainStat: "dexterity",
	secondStat: false,
	saveThrow: "intelligence",
	miscStats: ["strength", "constitution", "wisdom", "charisma"],
};
exports.run = async (character) => {

	character.class = "Rogue";
	character.inventory.tools = "Thieves Tools";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.armor = gear.armor.name;
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "rogue",
	aliases: ["thief"],
};
