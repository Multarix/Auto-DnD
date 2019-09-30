const colors = require('colors');
const fs = require('fs');
const Discord = require("discord.js");
module.exports = async (client) => {

	// Command & Event Collections
	client.commands = new Discord.Collection();
	client.aliases = new Discord.Collection();
	client.events = new Discord.Collection();
	// NPC Generation Collections
	client.classType = new Map();
	client.classAlias = new Map();
	client.raceType = new Map();
	client.raceAlias = new Map();

	//	Permission level for commands.
	client.permlevel = (message) => {
		let permlvl = 0;

		if(message.author.id === client.config.ownerID) return permlvl = 10;
		if(!message.guild || !message.member) return permlvl = 0;

		const dm = message.guild.roles.find(r => r.name === client.config.dmRole);

		if(message.member.roles.has(dm)) return permlvl = 1;
		if(message.author.id === message.guild.owner.id) return permlvl = 1;

		return permlvl;
	};

	//	Client log, semi-useful for keeping track of what is what in the console
	client.log = (msg, title) => {
		if(!title) title = "Log";
		const time = require("../modules/misc/time.js")();
		fs.appendFileSync("./logs.txt", `\n[${time.exactDate}] (${time.time}) ${msg.replace(/\[3[7&9]m/g, "")}`);		// eslint-disable-line no-control-regex
		if(title.toLowerCase() === "error") return console.log(`[${colors.red(time.time)}](${colors.red(title)}) ${colors.red(msg)}`);
		if(title.toLowerCase() === "warn") return console.log(`[${colors.yellow(time.time)}](${colors.yellow(title)}) ${colors.yellow(msg)}`);
		if(title.toLowerCase() === "notify") return console.log(`[${colors.cyan(time.time)}](${colors.cyan(title)}) ${colors.cyan(msg)}`);
		if(title.toLowerCase() === "sql") return console.log(`[${colors.magenta(time.time)}](${colors.magenta(title)}) ${colors.magenta(msg)}`);
		console.log(`[${colors.gray(time.time)}](${colors.gray(title)}) ${colors.gray(msg)}`);
	};

	/*
	MESSAGE CLEAN FUNCTION
	"Clean" removes @everyone pings, as well as tokens, and makes code blocks
	escaped so they're shown more easily. As a bonus it resolves promises
	and stringifies objects!
	This is mostly only used by Eval and Exec commands.
	*/

	client.clean = async (client, text) => {
		if(text && text.constructor.name == "Promise"){
			text = await text;
		}
		if(typeof evaled !== "string"){
			text = require("util").inspect(text, { depth: 0 });
		}
		text = text
			.replace(/`/g, "`" + String.fromCharCode(8203))
			.replace(/@/g, "@" + String.fromCharCode(8203))
			.replace(client.token, "https://i.imgur.com/cGIay9e.png");

		return text;
	};

	// Factorial functions.
	client.factorial = (num) => {
		if(isNaN(num)) return NaN;
		num = parseInt(num);
		let mNum = 1;
		for(let i = 2; i <= num; i++) mNum = mNum * i;
		return mNum;
	};

	// Guild only check for certain commands (finally)
	client.allowDM = (m, c) => {
		let channelCheck = false;
		if(m.channel.type !== "dm" || c.conf.allowDM) channelCheck = true;
		return channelCheck;
	};

	/* Non-Critical Misc Functions */

	/*
	I'm aware that extending these is considered bad practice for a number of reasons
	However, the usefulness of them when taken into consideration makes it worth doing.
	(At least for these use cases anyway).
	*/

	String.prototype.toProperCase = function() {	// "this is a string" => "This Is A String";
		return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
	};
	Map.prototype.random = function() {	// Gets a random element of a map;
		return this.get([...this.keys()][Math.floor(Math.random() * this.size)]);
	};
	Array.prototype.random = function() {	// Gets a random element of an array;
		return this[Math.floor(Math.random() * this.length)];
	};

	/* Custom Globals */
	global.wait = require("util").promisify(setTimeout);

	// Calls process exit, if using something like pm2, the bot should automatically restart.
	global.restartBot = async (restartInfo) => {
		if(!restartInfo) restartInfo = "Automatic Restart";
		client.log(`Perfmorming reboot.. Reason: ${restartInfo}`, "Log");
		await wait(1000).then(() => {
			process.exit();
		});
	};

	// Checks for and fetches a user if it exists.
	global.grabUser = async (userID) => {
		if(!userID) return;
		if(userID.startsWith("<@") && userID.endsWith(">")) userID = userID.slice(2, -1);
		if(userID.startsWith("!")) userID = userID.slice(1);
		await client.fetchUser(userID).catch(e => { return; });
		return client.users.get(userID);
	};

	// Checks for and fetches a channel if it exists.
	global.grabChannel = (channelID) => {
		if(!channelID) return;
		if(channelID.startsWith("<#") && channelID.endsWith(">")) channelID = channelID.slice(2, -1);
		if(!client.channels.get(channelID)) return null;
		return client.channels.get(channelID);
	};

	// Checks for a role and returns it if it exists.
	global.grabRole = (roleID, guild) => {
		if(!roleID) return;
		if(!guild) return;
		if(guild.id) guild = guild.id;
		guild = client.guilds.get(guild);
		if(!guild) return null;
		if(roleID.startsWith("<@&") && roleID.endsWith(">")) roleID = roleID.slice(3, -1);
		if(!guild.roles.get(roleID)) return null;
		return guild.roles.get(roleID);
	};

	// Generates a random number between 0 and the specified value
	global.randomNumber = require("./misc/randomNumber.js");
	// NPC Stat Generation
	global.statGen = require("../modules/misc/randomStat.js");
	// Dice
	global.d4 = require("../modules/dice/d4.js");
	global.d6 = require("../modules/dice/d6.js");
	global.d8 = require("../modules/dice/d8.js");
	global.d10 = require("../modules/dice/d10.js");
	global.d12 = require("../modules/dice/d12.js");
	global.d20 = require("../modules/dice/d20.js");
	global.d100 = require("../modules/dice/d100.js");
	global.percentile = require("../modules/dice/percentile.js");

	// I see your unhandled things, and present to you, handled things!

	process.on("uncaughtException", (err) => {
		const time = require("../modules/misc/time.js")();
		const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
		fs.appendFileSync("./logs.txt", `\n[${time.exactDate}] (${time.time}) ${"Uncaught Exception:" + errorMsg.toString().replace(/\[3[7&9]m/g, "")}`);	// eslint-disable-line no-control-regex
		console.error("Uncaught Exception: ", errorMsg);
		restartBot("Uncaught Exception");
	});

	process.on("unhandledRejection", err => {
		const time = require("../modules/misc/time.js")();
		fs.appendFileSync("./logs.txt", `\n[${time.exactDate}] (${time.time}) ${err.toString().replace(/\[3[7&9]m/g, "")}`);	// eslint-disable-line no-control-regex
		console.error("Uncaught Promise Error: ", err);
		restartBot("Unhandled Rejection");
	});
};
