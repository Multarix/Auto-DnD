const Discord = require("discord.js");


const nameGenerator = require("./npc/name/nameGen.js");
exports.run = async (client, message, args) => {

	if(!args[0] || !args[1]) return message.channel.send("Usage: [npc](<..race> <..job/class>)", { code: "markdown" });

	let character = {
		race: "\u200b",
		small: false,
		speed: 0,
		class: "\u200b",
		job: "\u200b",
		gender: "\u200b",
		name: "\u200b",
		stats: {
			strength: 8,
			dexterity: 8,
			constitution: 8,
			intelligence: 8,
			wisdom: 8,
			charisma: 8,
		},
		inventory: {
			armor: "none",
			weapon: "none",
			tools: "none",
		},
	};

	const raceCheck = args.shift().toLowerCase();
	const chosenRace = client.raceType.get(raceCheck) || client.raceType.get(client.raceAlias.get(raceCheck));
	if(!chosenRace) return message.channel.send("No Race/ Inavlid Race specified\nUsage: [npc](<..race> <..job/class>)", { code: "markdown" });

	const classCheck = args.shift().toLowerCase();
	const chosenClass = client.classType.get(classCheck) || client.classType.get(client.classAlias.get(classCheck));
	if(!chosenClass) return message.channel.send("No Class/ Invalid Class specified\nUsage: [npc](<..race> <..job/class>)", { code: "markdown" });

	character = await chosenRace.run(character);
	character = await chosenClass.run(character);
	character = await chosenRace.stats(character);
	character = await nameGenerator(character);

	let str = "";
	for(const [key, value] of Object.entries(character.stats)){
		str += `**${key.toProperCase()}** - ${value}\n`;
	}

	const embed = new Discord.RichEmbed()
		.setAuthor(message.member.displayName, message.author.displayAvatarURL)
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp()
		.setTitle(character.name)
		.addField("🛡 **Armor**", `${character.inventory.armor} Armor`, true)
		.addField("⚔ Weapon", character.inventory.weapon, true)
		.addField("🛠 **Tools**", character.inventory.tools, true)
		.addField("**Stats**", `\u200b${str}`, true)
		.addField("**Misc Information**", `**Race** - ${character.race}\n**Speed** - ${character.speed}\n**Class** - ${character.class}\n**Gender** - ${character.gender}\n`, true)
		.addBlankField(true);

	return message.channel.send(embed);
};

// /create human str-fighter ?
// /create human dex-fighter ?
// /create human int-fighter ?

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["n"],
	permLevel: 10,
};

exports.help = {
	name: "npc",
	category: "Misc",
	description: "Creates a semi-random NPC",
	usage: "race job/class",
};
