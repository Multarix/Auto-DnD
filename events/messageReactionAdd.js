const Discord = require("discord.js");
module.exports = async (client, messageReaction, user) => {

	if(user.bot) return;
	const message = messageReaction.message;
	const reaction = messageReaction;
	const regPrefix = /[!\/]reboot/g;	// eslint-disable-line no-useless-escape
	if(message.content.toLowerCase().match(regPrefix) && user.id === client.config.ownerID && reaction.emoji.id === "340357918996299778") return message.delete();
};


module.exports.help = {
	name: "messageReactionAdd",
	description: "Emitted when a user adds a reaction",
};
