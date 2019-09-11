module.exports = (roll) => {
	if(roll <= 50) return "1 **Potion of Healing**\n";
	if(roll <= 60) return "1 **Spell Scroll (Cantrip)**\n";
	if(roll <= 70) return "1 **Potion of Climbing**\n";
	if(roll <= 90) return "1 **Spell Scroll (1st level)**\n";
	if(roll <= 94) return "1 **Spell Scroll (2nd level)**\n";
	if(roll <= 98) return "1 **Potion of Greater Healing**\n";
	if(roll === 99) return "1 **Bag of Holding**\n";
	if(roll === 100) return "1 **Driftglobe**\n";
};
