const Discord = require("discord.js");

const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const client = new Discord.Client({ disableEveryone: true });

client.config = require("./config.json");
require("./modules/functions.js")(client);

const init = async () => {
	const cmdFiles = await readdir("./commands/");
	client.log(`Loading a total of ${cmdFiles.length} commands.`, "Commands");
	cmdFiles.forEach(f => {
		try {
			if(f.split(".").slice(-1)[0] !== "js") return;
			const props = require(`./commands/${f}`);
			client.log(`Loaded Command File: ${props.help.name}.js`, "Log");
			client.commands.set(props.help.name, props);
			props.conf.aliases.forEach(alias => {
				client.aliases.set(alias, props.help.name);
			});
		} catch (e){
			client.log(`Unable to load command ${f}: ${e}`, "Warn");
		}
	});

	const evtFiles = await readdir("./events/");
	client.log(`Loading a total of ${evtFiles.length} events.`, "Events");
	evtFiles.forEach(file => {
		try {
			if(file.split(".").slice(-1)[0] !== "js") return;
			const event = require(`./events/${file}`);
			const eventName = file.split(".")[0];
			client.on(eventName, event.bind(null, client));
			client.events.set(event.help.name, event);

			delete require.cache[require.resolve(`./events/${file}`)];

		} catch (e){
			client.log(`Unable to load event ${file}: ${e}`, "Error");
		}
	});

	const raceFiles = await readdir("./commands/npc/race/");
	client.log(`Loading a total of ${raceFiles.length} races.`, "NPC Gen");
	raceFiles.forEach(r => {
		try {
			if(r.split(".").slice(-1)[0] !== "js") return;
			const f = require(`./commands/npc/race/${r}`);
			client.raceType.set(f.info.name, f);
			f.info.aliases.forEach(a => {
				client.raceAlias.set(a, f.info.name);
			});
		} catch (e){
			client.log(`Unable to load race ${r}: ${e}`, "Warn");
		}
	});

	const classFiles = await readdir("./commands/npc/class/");
	client.log(`Loading a total of ${classFiles.length} classes.`, "NPC Gen");
	classFiles.forEach(c => {
		try {
			if(c.split(".").slice(-1)[0] !== "js") return;
			const f = require(`./commands/npc/class/${c}`);
			client.classType.set(f.info.name, f);
			f.info.aliases.forEach(a => {
				client.classAlias.set(a, f.info.name);
			});
		} catch (e){
			client.log(`Unable to load class ${c}: ${e}`, "Warn");
		}
	});

	client.login(client.config.clientTokenBeta);
};

init();
