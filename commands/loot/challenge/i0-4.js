module.exports = (roll, message, embed) => {
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
};
