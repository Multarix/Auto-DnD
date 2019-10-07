const Discord = require("discord.js");

const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const client = new Discord.Client({
	disableEveryone: true,
	shardCount: "auto",
	disabledEvents: ["TYPING_START", "CHANNEL_PINS_UPDATE"],
});

client.config = require("./config.json");
require("./modules/functions.js")(client);

const init = async () => {
	const cmdFiles = await readdir("./commands/");
	client.log(`Loading a total of ${cmdFiles.length} commands.`, "Commands");
	cmdFiles.forEach(f => {
		try {
			if(!f.endsWith(".js")) return;
			const command = require(`./commands/${f}`);
			client.log(`Loaded Command File: ${command.help.name}.js`, "Log");
			client.commands.set(command.help.name, command);
			command.conf.aliases.forEach(alias => {
				client.aliases.set(alias, command.help.name);
			});
		} catch (e){
			client.log(`Unable to load command ${f}: ${e}`, "Warn");
		}
	});

	const evtFiles = await readdir("./events/");
	client.log(`Loading a total of ${evtFiles.length} events.`, "Events");
	evtFiles.forEach(f => {
		try {
			if(f.split(".").slice(-1)[0] !== "js") return;
			const event = require(`./events/${f}`);
			const eventName = f.split(".")[0];
			client.on(eventName, event.bind(null, client));
			client.events.set(event.help.name, event);

			delete require.cache[require.resolve(`./events/${f}`)];

		} catch (e){
			client.log(`Unable to load event ${f}: ${e}`, "Error");
		}
	});

	const raceFiles = await readdir("./commands/npc/race/");
	client.log(`Loading a total of ${raceFiles.length} races.`, "NPC Gen");
	raceFiles.forEach(f => {
		try {
			if(!f.endsWith(".js")) return;
			const r = require(`./commands/npc/race/${f}`);
			client.raceType.set(r.info.name, r);
			r.info.aliases.forEach(a => {
				client.raceAlias.set(a, r.info.name);
			});
		} catch (e){
			client.log(`Unable to load race ${f}: ${e}`, "Warn");
		}
	});

	const classFiles = await readdir("./commands/npc/class/");
	client.log(`Loading a total of ${classFiles.length} classes.`, "NPC Gen");
	classFiles.forEach(f => {
		try {
			if(!f.endsWith(".js")) return;
			const c = require(`./commands/npc/class/${f}`);
			client.classType.set(c.info.name, c);
			c.info.aliases.forEach(a => {
				client.classAlias.set(a, c.info.name);
			});
		} catch (e){
			client.log(`Unable to load class ${f}: ${e}`, "Warn");
		}
	});

	client.login(client.config.clientToken);
};

init();
