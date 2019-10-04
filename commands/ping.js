exports.run = async (client, message, args, level) => {

	const sent = await message.channel.send('Pinging...').catch(e => errFunc(e));
	if(!sent) return;
	sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms\nHeartbeat ping is: ${Math.round(client.ws.ping)}ms`);
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
