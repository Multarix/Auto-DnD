module.exports = (roll) => {
	if(roll <= 30) return "1 **Spell Scroll (8th level)**\n";
	if(roll <= 55) return "1 **Potion of Storm Giant Strength**\n";
	if(roll <= 70) return "1 **Potion of Supreme Healing**\n";
	if(roll <= 85) return "1 **Spell Scroll (9th level)**\n";
	if(roll <= 93) return "1 **Universal Solvent**\n";
	if(roll <= 98) return "1 **Arrow of Slaying**\n";
	if(roll <= 100) return "1 **Sovereign Glue**\n";
};
