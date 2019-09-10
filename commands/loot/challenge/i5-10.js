module.exports = (roll, message, embed) => {
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
};
