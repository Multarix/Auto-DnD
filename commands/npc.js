const Discord = require("discord.js");
const dnd = require("dnd-npc");
const roles = require("./npc/roles.json");
const races = require("./npc/races.json");
exports.run = async (client, message, args) => {

	if(!args[0] || !args[1]) return await message.channel.send("Usage: [npc](<..race> <..role/class>)", { code: "markdown" });

	const npcRace = (races.includes(args[0].toLowerCase())) ? args[0].toLowerCase() : undefined;
	if(!npcRace) return await message.channel.send("Invalid race\nUsage: [npc](<..race> <..role/class>)", { code: "markdown" });
	const npcRole = (roles.includes(args[1].toLowerCase())) ? args[1].toLowerCase() : undefined;
	if(!npcRole) return await message.channel.send("Invalid class\nUsage: [npc](<..race> <..role/class>)", { code: "markdown" });

	const npc = new dnd.npc({ raceType: npcRace, roleType: npcRole }).generate();

	let stats = "";
	for(const [key, value] of Object.entries(npc.role.stats)){
		stats += `**${key.toProperCase()}** :: ${value}\n`;
	}

	const weapon = (npc.inventory.shield) ? `[${npc.inventory.weapon.name}](${npc.inventory.weapon.link}) & [Shield](${npc.inventory.shield})` : `[${npc.inventory.weapon.name}](${npc.inventory.weapon.link})`;
	const armor = (npc.inventory.armor) ? `[${npc.inventory.armor.name}](${npc.inventory.armor.link})` : "None";

	let tools = "None";
	if(npc.inventory.tools.length > 0){
		tools = [];
		npc.inventory.tools.forEach(t => {
			tools.push(`[${t.name}](${t.link})`);
		});
		tools = tools.join("\n");
	}
	tools += "\n\u200b";

	const embed = new Discord.MessageEmbed()
		.setTitle(`**Name:** \u200b \u200b ${npc.character.name}`)
		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp()
		.addField("Race/ Subrace", `[${npc.race.name}](${npc.race.link})`, true)
		.addField("Class", `[${npc.role.name}](${npc.role.link})`, true)
		.addField("Alignment", npc.character.alignment, true)
		.addField("Size", npc.race.size, true)
		.addField("Speed", npc.race.speed, true)
		.addField("Gender", npc.character.gender, true)
		.addField("Tools", tools, true)
		.addField("Weapon", weapon, true)
		.addField("Armor", armor, true)
		.addField("Strength", npc.role.stats.strength, true)
		.addField("Dexterity", npc.role.stats.dexterity, true)
		.addField("Constitution", npc.role.stats.constitution, true)
		.addField("Intelligence", npc.role.stats.intelligence, true)
		.addField("Wisdom", npc.role.stats.wisdom, true)
		.addField("Charisma", npc.role.stats.charisma, true);

	return message.channel.send({ embed }).catch(e => errFunc(e));
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["n"],
	permLevel: 0
};

exports.help = {
	name: "npc",
	category: "Dungeons & Dragons",
	description: "Creates a semi-random NPC",
	usage: "race job/class"
};
