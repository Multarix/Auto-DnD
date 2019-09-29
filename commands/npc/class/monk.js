const inventory = require("../items/inventory.js");
const wTags = {
	"names": ["Shortsword"],
	"simple": true,
	"martial": false,
};
const aTags = {
	"types": [],
	"metal": true,
	"shield": false,
};
const skills = {
	mainStat: "dexterity",
	secondStat: "wisdom",
	saveThrow: "strength",
	miscStats: ["constitution", "intelligence", "charisma"],
};
const musical = require("../items/musicalInstruments.json");
const artisan = require("../items/artisanTools.json");
exports.run = async (character) => {

	character.class = "Monk";

	const tool = artisan.random();
	const instrument = musical.random();
	const item = (Math.random() > 0.5) ? `[${instrument.name}](${instrument.link})` : `[${tool.name}](${tool.link})`;
	character.inventory.tools = item;

	const npc = statGen(character, skills);

	const gear = inventory(npc, wTags, aTags);
	npc.inventory.weapon = gear.weapon.name;
	return npc;
};

exports.info = {
	name: "monk",
	aliases: [],
};
