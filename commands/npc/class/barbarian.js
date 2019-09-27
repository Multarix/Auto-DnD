const inventory = require("../items/inventory.js");
const wTags = {
	"names": [],
	"simple": true,
	"martial": true,
};
const aTags = {
	"types": ["light", "medium"],
	"metal": true,
	"shield": true,
};
const skills = {
	mainStat: "strength",
	secondStat: false,
	saveThrow: "constitution",
	miscStats: ["dexterity", "intelligence", "wisdom", "wisdom"],
};
exports.run = async (character) => {

	character.class = "Barbarian";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.armor = gear.armor.name;
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "barbarian",
	aliases: ["barb"],
};
