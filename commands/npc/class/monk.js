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

	const tool = randomNumber(artisan.length);
	const instrument = randomNumber(musical.length);
	const item = (Math.random() > 0.5) ? `[${musical[instrument].name}](${musical[instrument].link})` : `[${artisan[tool].name}](${artisan[tool].link})`;
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
