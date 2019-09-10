module.exports = (roll, message, embed) => {
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
};
