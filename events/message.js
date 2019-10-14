const string = `Due to the nature of this bot, it requires embed permissions to run certain commands.
Please grant the bot embed permissions and try the command again.`;
module.exports = async (client, message) => {

	if(message.author.bot) return;
	if(message.channel.type !== "dm"){
		if(!message.channel.memberPermissions(message.guild.me).has("SEND_MESSAGES")) return;
	}

	const level = client.permlevel(message);
	const mention = new RegExp(`^<@!?${client.user.id}>`);
	const mentionCheck = message.content.match(mention) ? message.content.match(mention)[0] : '!';

	const prefixes = [`${mentionCheck} `, client.config.prefix];
	let prefix = false;
	for(const thisPrefix of prefixes){
		if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
	}
	if(!prefix) return;

	let args = message.content.replace(/(?:\r\n|\r|\n)/g, "\u200b").split(/\s+/g);

	let command;
	if(args[0] === mentionCheck){
		args = args.slice(1);
		command = args.shift().toLowerCase();
	} else {
		command = args.shift().slice(prefix.length).toLowerCase();
	}
	const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
	if(cmd && level >= cmd.conf.permLevel){
		let allowDM = false;
		if(message.channel.type !== "dm" || cmd.conf.allowDM) allowDM = true;
		if(cmd.conf.enabled && allowDM){
			if(message.channel.type !== "dm"){
				if(!message.channel.memberPermissions(message.guild.me).has("EMBED_LINKS")) return message.channel.send(string);
			}
			cmd.run(client, message, args, level);
		}
		if(!allowDM) return message.channel.send("That command is disabled in DM's.");
	}
};

module.exports.help = {
	name: "message",
	description: "Emitted when a user sends a message",
};
