module.exports = (roll) => {
	if(roll <= 20) return "1 **Potion of Supreme Healing**\n";
	if(roll <= 30) return "1 **Potion of Invisibility**\n";
	if(roll <= 40) return "1 **Potion of Speed**\n";
	if(roll <= 50) return "1 **Spell Scroll (6th level)**\n";
	if(roll <= 57) return "1 **Spell Scroll (7th level)**\n";
	if(roll <= 62) return "3 **Ammunition**\n";
	if(roll <= 67) return "1 **Oil of Sharpness**\n";
	if(roll <= 72) return "1 **Potion of Flying**\n";
	if(roll <= 77) return "1 **Potion of Cloud Giant Strength**\n";
	if(roll <= 82) return "1 **Potion of Longevity**\n";
	if(roll <= 87) return "1 **Potion of Vitality**\n";
	if(roll <= 92) return "1 **Spell Scroll (8th level)**\n";
	if(roll <= 95) return "1 **Horseshoes of a Zephyr**\n";
	if(roll <= 98) return "1 **Nolzur's Marvelous Pigments**\n";
	if(roll <= 99) return "1 **Bag of Devouring**\n";
	if(roll <= 100)	return "1 **Portable Hole**\n";
};
