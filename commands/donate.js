exports.run = (client, message, args) => {
	const str = `Don't be an idiot and throw your money away donating to discord bots.
	Donating to Discord bots is the dumbest idea I've seen UNLESS the bot is extremely popular;
	This bot is only in \`${client.guilds.cache.size}\` server(s).

	Don't get me wrong, I'd love your money, but I'm not a "Please donate to me" bot at this point.`;

	return message.channel.send(str.replace(/\t/g, "")).catch(e => errFunc(e));
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: "donate",
	category: "Misc",
	description: "Donate me Plox",
	usage: ".."
};
