const dm = require("./roll/dm.js");
const adm = require("./roll/adm.js");
exports.run = (client, message, args) => {

	if(!args[0]) return message.channel.send("Usage: [roll](<..amount> <..dice> <..modifier>)", { code: "markdown" });

	const d = parseInt(args[0]);
	if(isNaN(d)) return dm(client, message, args);
	return adm(client, message, args);
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["dice"],
	permLevel: 0
};

exports.help = {
	name: "roll",
	category: "Dungeons & Dragons",
	description: "Rolls some dice.",
	usage: "amount d4/d6/d8/d10/d20 modifier"
};
