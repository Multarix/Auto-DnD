exports.run = async (client, message, args) => {

	let good = client.emojis.get("340357918996299778");
	if(!good) good = "👍";

	await message.react(good);
	return restartBot("Manual Restart");
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["reboot"],
	permLevel: 10,
};

exports.help = {
	name: "restart",
	category: "System",
	description: "Restarts the bot",
	usage: "..",
};
