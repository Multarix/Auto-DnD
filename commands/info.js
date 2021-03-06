const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js");
exports.run = (client, message, args) => {

	const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
	const embed = new Discord.MessageEmbed()
		.setAuthor(`Bot Stats`)
		.setColor(13238272)
		.setThumbnail(client.user.displayAvatarURL())
		.addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, true)
		.addField("Users", `${client.users.cache.size.toLocaleString()}`, true)
		.addField("Node.js", `${process.version}`, true)
		.addField("Channels", `${client.channels.cache.size.toLocaleString()}`, true)
		.addField("Discord.js", `v${version}`, true)
		.addField("Servers", `${client.guilds.cache.size.toLocaleString()}`, true)
		.addField("Uptime", `${duration}`, true)
		.setFooter(client.user.tag, client.user.displayAvatarURL())
		.setTimestamp();
	return message.channel.send({ embed }).catch(e => errFunc(e));
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["stats"],
	permLevel: 10
};

exports.help = {
	name: "info",
	category: "Misc",
	description: "Gives some useful bot statistics",
	usage: ".."
};
