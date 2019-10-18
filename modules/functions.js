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
	client.log = (msg, title, shardID) => {
		if(!title) title = "Log";
		if(isNaN(shardID)) shardID = "null";

		let str = "";
		const time = require("../modules/misc/time.js")();
		switch (title.toLowerCase()){
		/* eslint-disable indent*/
			case "error": str = `<${colors.red(time.time)}>[${colors.red(`Shard-${shardID}`)}](${colors.red(title)}) ${colors.red(msg)}`; break;
			case "warn": str = `<${colors.yellow(time.time)}>[${colors.yellow(`Shard-${shardID}`)}](${colors.yellow(title)}) ${colors.yellow(msg)}`; break;
			case "notify": str = `<${colors.cyan(time.time)}>[${colors.cyan(`Shard-${shardID}`)}](${colors.cyan(title)}) ${colors.cyan(msg)}`; break;
			case "sql":	str = `<${colors.magenta(time.time)}>[${colors.magenta(`Shard-${shardID}`)}](${colors.magenta(title)}) ${colors.magenta(msg)}`; break;
			default: str = `<${colors.gray(time.time)}>[${colors.gray(`Shard-${shardID}`)}](${colors.gray(title)}) ${colors.gray(msg)}`;	break;
		/* eslint-enable indent */
		}
		if(client.logging){
			fs.appendFileSync("./logs.txt", `\n[${time.exactDate}] (${time.time}) ${msg.replace(/\[\d+m/g, "")}`);		// eslint-disable-line no-control-regex
		}
		const reggie = /\[\[\d+mShard-null\[\d+m\]/;	// eslint-disable-line no-control-regex
		str = str.replace(reggie, "");
		console.log(str);
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

	/* Non-Critical Misc Functions */

	/*
	I'm aware that extending these is considered bad practice for a number of reasons
	However, the usefulness of them when taken into consideration makes it worth doing.
	(At least for these use cases anyway).
	*/

	String.prototype.toProperCase = function() {	// "this is a string" => "This Is A String";
		return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
	};
	String.prototype.removeIndents = function() {	// Removes indents from a string.
		return this.replace(/\n(\t+)/g, "\n");
	};
	Map.prototype.random = function() {	// Gets a random element of a map;
		return this.get([...this.keys()][Math.floor(Math.random() * this.size)]);
	};
	Array.prototype.random = function() {	// Gets a random element of an array;
		return this[Math.floor(Math.random() * this.length)];
	};

	/* Custom Globals */
	global.wait = require("util").promisify(setTimeout);

	global.errFunc = (error) => {
		if(error.code === 50007) return undefined; // Ignore the error if it's can't send message to this user;
		client.log(error.message, "Error");
		return null; // In the event that async is being used, return null.
	};

	// Calls process exit, if using something like pm2, the bot should automatically restart.
	global.restartBot = async (restartInfo) => {
		if(!restartInfo) restartInfo = "Automatic Restart";
		client.log(`Perfmorming reboot.. Reason: ${restartInfo}`, "Log");
		await wait(500).then(() => {
			process.exit();
		});
	};

	// Checks for and fetches a user if it exists.
	global.grabUser = async (userID) => {
		if(!userID) return undefined;
		if(userID.startsWith("<@") && userID.endsWith(">")) userID = userID.slice(2, -1);
		if(userID.startsWith("!")) userID = userID.slice(1);
		await client.users.fetch(userID).catch(e => { return undefined; });
		return client.users.get(userID);
	};

	// Checks for and fetches a channel if it exists.
	global.grabChannel = (channelID) => {
		if(!channelID) return;
		if(channelID.startsWith("<#") && channelID.endsWith(">")) channelID = channelID.slice(2, -1);
		if(!client.channels.get(channelID)) return undefined;
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
		if(!guild.roles.get(roleID)) return undefined;
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
		if(err.code === 50007) return;
		const time = require("../modules/misc/time.js")();
		const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
		fs.appendFileSync("./logs.txt", `\n[${time.exactDate}] (${time.time}) ${"Uncaught Exception:" + errorMsg.toString().replace(/\[3[7&9]m/g, "")}`);	// eslint-disable-line no-control-regex
		console.error("Uncaught Exception: ", errorMsg);
		restartBot("Uncaught Exception");
	});

	process.on("unhandledRejection", (err) => {
		if(err.code === 50007) return;
		const time = require("../modules/misc/time.js")();
		fs.appendFileSync("./logs.txt", `\n[${time.exactDate}] (${time.time}) ${err.toString().replace(/\[3[7&9]m/g, "")}`);	// eslint-disable-line no-control-regex
		console.error("Uncaught Promise Error: ", err);
		restartBot("Unhandled Rejection");
	});
};
