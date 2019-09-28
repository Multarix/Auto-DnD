const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
	"simple": false,
	"martial": false,
};
const aTags = {
	"types": [],
	"metal": true,
	"shield": false,
};
const skills = {
	mainStat: "intelligence",
	secondStat: false,
	saveThrow: "wisdom",
	miscStats: ["strength", "dexterity", "constitution", "charisma"],
};
exports.run = async (character) => {

	character.class = "Wizard";
	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "wizard",
	aliases: ["wiztard"],
};
