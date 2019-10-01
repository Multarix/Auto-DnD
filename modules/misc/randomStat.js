module.exports = (character, obj) => {
	let total = 0;
	for(const [key] of Object.entries(character.stats)){
		const num = randomNumber(5);
		character.stats[key] += num;
		total += num;
	}
	total -= 27;

	while(total < 0 && character.stats[obj.mainStat] !== 15){
		character.stats[obj.mainStat] += 1;
		total += 1;
		if(character.stats[obj.mainStat] >= 14) total += 1;
	}

	if(obj.secondStat){
		while(total < 0 && character.stats[obj.secondStat] !== 14){
			character.stats[obj.secondStat] += 1;
			total += 1;
			if(character.stats[obj.secondStat] >= 14) total += 1;
		}
	}

	while(total < 0 && character.stats[obj.saveThrow] !== 14){
		character.stats[obj.saveThrow] += 1;
		total += 1;
		if(character.stats[obj.saveThrow] >= 14) total += 1;
	}

	while(total < 0){
		const num = randomNumber(obj.miscStats.length);
		if(character.stats[obj.miscStats[num]] < 13){	character.stats[obj.miscStats[num]] += 1;	total += 1;	}
	}
	return character;
};
