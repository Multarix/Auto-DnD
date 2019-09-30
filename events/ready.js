const colors = require("colors");
module.exports = async client => {

	await wait(1000);

	const time = new Date();
	client.log(`Logged in as ${client.user.tag}
    > Accessing a total of '${client.guilds.size}' server(s) With a total of '${client.users.size}' users\nReady called at: ${time}`, "Ready");

	client.channels.filter(c => c.type === "text" && c.memberPermissions(c.guild.me).has("VIEW_CHANNEL")).forEach(c => c.fetchMessages({ limit: 5 }));

	let game = "with Guildbot";
	if(client.user.id === "304230184494563329") game = "with Dice";
	if(client.user.id === "628082697553575941") game = "D&D Debugger";
	client.user.setActivity(game, { type: 'PLAYING' }).then(client.log("Now playing " + colors.white("[") + game + colors.white("]"), "Activity"));
};

module.exports.help = {
	name: "ready",
	description: "Emitted when the client is ready",
};
