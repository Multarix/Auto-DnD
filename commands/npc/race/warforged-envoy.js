exports.run = async (character) => {
	character.race.name = "Envoy Warforged";
	character.race.link = "https://www.dndbeyond.com/races/warforged#Envoy";
	character.race.speed = 30;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 1;
	const a = ["strength", "dexterity", "intelligence", "wisdom", "chrisma"];
	let num = randomNumber(4);
	let s = a[num];	// Grab the item in num's position from the array
	character.stats[s] += 1;	// Apply +1 to that item from the character stats

	a.splice(num, 1);	// Remove the stat that was increased from the array
	num = randomNumber(3);
	s = a[num];	// Grab the item in num's position from the array
	character.stats[s] += 1;	// Apply +1 to that item from the character stats
	return character;
};

exports.info = {
	name: "envoy",
	aliases: ["warforged-envoy", "warforgedenvoy", "envoy-warforged", "envoywarforged"],
};
