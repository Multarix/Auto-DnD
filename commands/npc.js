const Discord = require("discord.js");

const chosenRace = require("./npc/race/halfelf.js");
const chosenClass = require("./npc/class/rogue.js");
const nameGenerator = require("./npc/name/nameGen.js");
exports.run = async (client, message, args) => {

	// if(!args[0] || !args[1]) return message.channel.send("Usage: [npc](<..race> <..job/class>)", { code: "markdown" });

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
	/*
	const raceCheck = args.shift();
	const chosenRace = client.commands.get(raceCheck) || client.commands.get(client.aliases.get(raceCheck));
	if(!chosenRace) return;
	*/

	character = await chosenClass.run(character);
	character = await chosenRace.run(character);
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
		.addField("🛡 **Armor**", character.inventory.armor, true)
		.addField("⚔ **Weapon**", "Dagger", true)
		// .addField("⚔ Weapon", character.inventory.weapon, true)
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
