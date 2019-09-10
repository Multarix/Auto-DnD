module.exports = (roll) => {
	if(roll <= 30) return "Spell Scroll (8th level)";
	if(roll <= 55) return "Potion of Storm Giant Strength";
	if(roll <= 70) return "Potion of Supreme Healing";
	if(roll <= 85) return "Spell Scroll (9th level)";
	if(roll <= 93) return "Univeral Solvent";
	if(roll <= 98) return "Arrow of Slaying";
	if(roll <= 100) return "Sovereign Glue";
};
