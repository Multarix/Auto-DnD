const Discord = require('discord.js');
exports.run = (client, message, args) => {

	let good = client.emojis.cache.get("340357918996299778");
	if(!good) good = "👍";

	const invStr = `[Click Here](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8 "Invite ${client.user.username.toProperCase()} to your server") to invite
		${client.user.username} to your
		own server.`;

	const embed = new Discord.MessageEmbed()
		.setThumbnail(client.user.displayAvatarURL())
		.setColor(14487568)
		.addField(`${client.user.username} Invite Link`, invStr.replace(/\t/g, ""), false)
		.setFooter(client.user.tag, client.user.displayAvatarURL())
		.setTimestamp();

	message.react(good);

	return message.author.send({ embed }).catch(e => errFunc(e));
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["inv"],
	permLevel: 0
};

exports.help = {
	name: "invite",
	category: "Misc",
	description: "Generates the bot's invite link",
	usage: ".."
};
