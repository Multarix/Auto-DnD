module.exports = (challenge, roll, message, embed) => {
	// Challenge level 0 - 4
	if(challenge <= 4){
		const tier1 = require("./challenge/i0-4.js");
		return tier1(roll, message, embed);
	}
	// Challenge level 5 - 10
	if(challenge <= 10){
		const tier2 = require("./challenge/i5-10.js");
		return tier2(roll, message, embed);
	}
	// Challenge level 11 - 16
	if(challenge <= 16){
		const tier3 = require("./challenge/i11-16.js");
		return tier3(roll, message, embed);
	}
	// Challenge level 17+
	if(challenge >= 17){
		const tier4 = require("./challenge/i17.js");
		return tier4(roll, message, embed);
	}
};
