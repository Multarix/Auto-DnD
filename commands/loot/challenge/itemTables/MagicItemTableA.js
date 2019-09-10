module.exports = (roll) => {
	if(roll <= 50) return "Potion of Healing";
	if(roll <= 60) return "Spell Scroll (Cantrip)";
	if(roll <= 70) return "Potion of Climbing";
	if(roll <= 90) return "Spell Scroll (1st level)";
	if(roll <= 94) return "Spell Scroll (2nd level)";
	if(roll <= 98) return "Potion of Greater Healing";
	if(roll === 99) return "Bag of Holding";
	if(roll === 100) return "Driftglobe";
};
