const colors = require("colors");
module.exports = client => {

	client.log("Re-established a connection to the websocket.", "Notify");
	client.user.setActivity("with Dice", { type: 'PLAYING' }).then(client.log("Now playing " + colors.white("[") + "with Dice" + colors.white("]"), "Activity"));
};

module.exports.help = {
	name: "resume",
	description: "Emitted when the client reconnects to the websocket.",
};
