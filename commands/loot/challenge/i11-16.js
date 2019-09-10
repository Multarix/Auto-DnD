module.exports = (roll, message, embed) => {
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
};
