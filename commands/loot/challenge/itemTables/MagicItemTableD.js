module.exports = (roll) => {
	if(roll <= 20) return "Potion of Supreme Healing";
	if(roll <= 30) return "Potion of Invisibility";
	if(roll <= 40) return "Potion of Speed";
	if(roll <= 50) return "Spell Scroll (6th level)";
	if(roll <= 57) return "Spell Scroll (7th level)";
	if(roll <= 62) return "Ammunition +3";
	if(roll <= 67) return "Oil of Sharpness";
	if(roll <= 72) return "Potion of Flying";
	if(roll <= 77) return "Potion of Cloud Giant Strength";
	if(roll <= 82) return "Potion of Longevity";
	if(roll <= 87) return "Potion of Vitality";
	if(roll <= 92) return "Spell Scroll (8th level)";
	if(roll <= 95) return "Horseshoes of a Zephyr";
	if(roll <= 98) return "Nolzur's Marvelous Pigments";
	if(roll <= 99) return "Bag of Devouring";
	if(roll <= 100)	return "Portable Hole";
};
