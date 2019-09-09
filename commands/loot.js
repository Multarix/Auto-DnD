const Discord = require('discord.js');
const percentile = require("../modules/dice/percentile.js");
exports.run = (client, message, args) => {

	const tens = percentile();
	const ones = d10();
	const roll = tens + ones;

	const embed = new Discord.RichEmbed()
		.setAuthor(message.member.displayName, message.author.displayAvatarURL)
		.setDescription("The dice has been cast...")
		.setFooter(client.user.username, client.user.displayAvatarURL)
		.setTimestamp()
		.addField("Percentile:", tens, true)
		.addField("D10:", ones, true)
		.addField("Combined Roll:", roll, true);

	if(!args[0]) return message.channel.send("Please specify the type of loot");
	if(!args[1]) return message.channel.send("Please specify the challenge level");

	const type = args[0].toLowerCase();
	const challenge = parseInt(args[1]);
	if(isNaN(challenge)) return message.channel.send("Please specify the challenge level");

	let typeArray = [];

	// Individual Treasure
	typeArray = ["individual", "indi", "ind", "i", "it", "personal", "p", "self", "s"];
	if(typeArray.includes(type)){

		// Challenge level 0 - 4
		if(challenge <= 4){
			// 1 - 30
			if(roll <= 30){
				const cp = [];
				let cpAmount = 0;
				for(let i = 0; i < 5; i++){
					const num = d6();
					cp.push(num);
					cpAmount += num;
				}
				embed.addField("Loot Class:", `5 D6 - **Copper Pieces**`, true)
					.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${cpAmount} **Copper Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 31 - 60
			if(roll <= 60){
				const sp = [];
				let spAmount = 0;
				for(let i = 0; i < 4; i++){
					const num = d6();
					sp.push(num);
					spAmount += num;
				}
				embed.addField("Loot Class:", `4 D6 - **Silver Pieces**`, true)
					.addField("Item Rolls:", `${sp.join(", ")} (${spAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${spAmount} **Silver Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 61 - 70
			if(roll <= 70){
				const ep = [];
				let epAmount = 0;
				for(let i = 0; i < 3; i++){
					const num = d6();
					ep.push(num);
					epAmount += num;
				}
				embed.addField("Loot Class:", `3 D6 - **Electrum Pieces**`, true)
					.addField("Item Rolls:", `${ep.join(", ")} (${epAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${epAmount} **Electrum Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 71 - 95
			if(roll <= 95){
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 3; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `3 D6 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${gpAmount} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 96 - 100
			if(roll <= 100){
				const pp = [];
				let ppAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					pp.push(num);
					ppAmount += num;
				}
				embed.addField("Loot Class:", `1 D6 - **Platinum Pieces**`, true)
					.addField("Item Rolls:", `${pp.join(", ")} (${ppAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${ppAmount} **Platinum Pieces**`, false);
				return message.channel.send({ embed });
			}
		}

		// Challenge level 5 - 10
		if(challenge <= 10){
			// 1 - 30
			if(roll <= 30){
				const cp = [];
				let cpAmount = 0;
				for(let i = 0; i < 4; i++){
					const num = d6();
					cp.push(num);
					cpAmount += num;
				}
				const ep = [];
				let epAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					ep.push(num);
					epAmount += num;
				}
				embed.addField("Loot Class:", `4 D6 x100 - **Copper Pieces**\n1 D6 x10 - **Electrum Pieces**`, true)
					.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})\n${ep.join(", ")} (${epAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**\n${epAmount * 10} **Electrum Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 31 - 60
			if(roll <= 60){
				const sp = [];
				let spAmount = 0;
				for(let i = 0; i < 6; i++){
					const num = d6();
					sp.push(num);
					spAmount += num;
				}
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `6 D6 x10 - **Silver Pieces**\n2 D6 x10 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `${sp.join(", ")} (${spAmount})\n${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${spAmount * 10} **Silver Pieces**\n${gpAmount * 10} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 61 - 70
			if(roll <= 70){
				const ep = [];
				let epAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					ep.push(num);
					epAmount += num;
				}
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `1 D6 x100 - **Electrum Pieces**\n2 D6 x10 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `${ep.join(", ")} (${epAmount})\n${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${epAmount * 100} **Electrum Pieces**\n${gpAmount * 10} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 71 - 95
			if(roll <= 95){
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 4; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `4 D6 x10 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${gpAmount * 10} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 96 - 100
			if(roll <= 100){
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				const pp = [];
				let ppAmount = 0;
				for(let i = 0; i < 3; i++){
					const num = d6();
					pp.push(num);
					ppAmount += num;
				}
				embed.addField("Loot Class:", `2 D6 x10 - **Gold Pieces**\n3 D6 - **Platinum Pieces**`, true)
					.addField("Item Rolls:", `${gp.join(", ")} (${gpAmount})\n${pp.join(", ")} (${ppAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${gpAmount * 10} **Gold Pieces**\n${ppAmount} **Platinum Pieces**`, false);
				return message.channel.send({ embed });
			}
		}

		// Challenge level 11 - 16
		if(challenge <= 16){
			// 1 - 20
			if(roll <= 20){
				const sp = [];
				let spAmount = 0;
				for(let i = 0; i < 4; i++){
					const num = d6();
					sp.push(num);
					spAmount += num;
				}
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `4 D6 x100 - **Silver Pieces**\n1 D6 x100 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `\n${sp.join(", ")} (${spAmount})\n${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${spAmount * 100} **Silver Pieces**\n${gpAmount * 100} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 21 - 35
			if(roll <= 35){
				const ep = [];
				let epAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					ep.push(num);
					epAmount += num;
				}
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `1 D6 x100 - **Electrum Pieces**\n1 D6 x100 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `${ep.join(", ")} (${epAmount})\n${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${epAmount * 100} **Electrum Pieces**\n${gpAmount * 100} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 36 - 75
			if(roll <= 75){
				const ep = [];
				let epAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					ep.push(num);
					epAmount += num;
				}
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `1 D6 x10 - **Electrum Pieces**\n2 D6 x100 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `${ep.join(", ")} (${epAmount})\n${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${epAmount * 10} **Electrum Pieces**\n${gpAmount * 100} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 76 - 100
			if(roll <= 100){
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				const pp = [];
				let ppAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					pp.push(num);
					ppAmount += num;
				}
				embed.addField("Loot Class:", `2 D6 x100 - **Gold Pieces**\n2 D6 x10 - **Platinum Pieces**`, true)
					.addField("Item Rolls:", `${gp.join(", ")} (${gpAmount})\n${pp.join(", ")} (${ppAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${gpAmount * 100} **Gold Pieces**\n${ppAmount * 10} **Platinum Pieces**`, false);
				return message.channel.send({ embed });
			}
		}

		// Challenge level 17+
		if(challenge >= 17){
			// 1 - 15
			if(roll <= 15){
				const ep = [];
				let epAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					ep.push(num);
					epAmount += num;
				}
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 8; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				embed.addField("Loot Class:", `2 D6 x1000 - **Electrum Pieces**\n8 D6 x100 - **Gold Pieces**`, true)
					.addField("Item Rolls:", `${ep.join(", ")} (${epAmount})\n${gp.join(", ")} (${gpAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${epAmount * 1000} **Electrum Pieces**\n${gpAmount * 100} **Gold Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 16 - 55
			if(roll <= 55){
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				const pp = [];
				let ppAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					pp.push(num);
					ppAmount += num;
				}
				embed.addField("Loot Class:", `1 D6 x100 - **Gold Pieces**\n1 D6 x100 - **Platinum Pieces**`, true)
					.addField("Item Rolls:", `${gp.join(", ")} (${gpAmount})\n${pp.join(", ")} (${ppAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${gpAmount * 100} **Gold Pieces**\n${ppAmount * 100} **Platinum Pieces**`, false);
				return message.channel.send({ embed });
			}
			// 56 - 100
			if(roll <= 100){
				const gp = [];
				let gpAmount = 0;
				for(let i = 0; i < 1; i++){
					const num = d6();
					gp.push(num);
					gpAmount += num;
				}
				const pp = [];
				let ppAmount = 0;
				for(let i = 0; i < 2; i++){
					const num = d6();
					pp.push(num);
					ppAmount += num;
				}
				embed.addField("Loot Class:", `1 D6 x100 - **Gold Pieces**\n2 D6 x100 - **Platinum Pieces**`, true)
					.addField("Item Rolls:", `${gp.join(", ")} (${gpAmount})\n${pp.join(", ")} (${ppAmount})`, true)
					.addBlankField(true)
					.addField("Final Loot:", `${gpAmount * 100} **Gold Pieces**\n${ppAmount * 100} **Platinum Pieces**`, false);
				return message.channel.send({ embed });
			}
		}
	}
	/*
	typeArray = ["treasure", "hoard", "tres", "tr", "th", "t", "h"];
	if(typeArray.includes(type){
		return;
	}
	*/
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0,
};

exports.help = {
	name: "loot",
	category: "Misc",
	description: "Automagically rolls for loot",
	usage: "individual/hoard challenge-level",
};
