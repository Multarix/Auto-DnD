exports.run = (client, message, args, level) => {

	message.channel.send('Pinging...').then(sent => {
		sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms\nHeartbeat ping is: ${Math.round(client.ping)}ms`);
	});
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: [],
	permLevel: 10,
};

exports.help = {
	name: "ping",
	category: "Misc",
	description: "Gets the bot's ping",
	usage: "..",
};
