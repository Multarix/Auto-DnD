const Discord = require('discord.js');
module.exports = (client, message, args) => {
	let rollTimes = parseInt(args[2]);
	if(isNaN(rollTimes) || rollTimes < 1) rollTimes = 1;

	const table = require("./challenge/miscRolls/lootPicker.js");
	const loot = table(args[1], false, rollTimes);
	if(loot === undefined) return message.channel.send("Usage: [/loot](<table> <amount>)", { code: "markdown" });
	const e = new Discord.RichEmbed()
		.setTitle(`Magic Item Table ${args[1].toUpperCase()}`)
		.setDescription("The dice has been cast...")
		.setAuthor(message.member.displayName, message.author.displayAvatarURL)
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp()
		.addField("Item", loot.items, true)
		.addBlankField(true)
		.addField("Roll", loot.rolls.split(", ").join("\n"), true);
	return message.channel.send(e);
};
