const colors = require("colors");
module.exports = async (client, shardID) => {

	await wait(1000);

	const time = new Date();
	client.log(`Accessing a total of '${client.guilds.size}' server(s) With a total of '${client.users.size}' users`, "Ready", shardID);

	let game = "with Guildbot";
	if(client.user.id === "304230184494563329") game = "with Dice";
	if(client.user.id === "628082697553575941") game = "D&D Debugger";
	client.user.setActivity(game, { type: 'PLAYING' }).then(client.log("Now playing " + colors.white("[") + game + colors.white("]"), "Activity", shardID));
};

module.exports.help = {
	name: "shardReady",
	description: "Emitted when the client is ready"
};
