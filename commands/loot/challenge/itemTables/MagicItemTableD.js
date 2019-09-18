module.exports = (roll) => {
	if(roll <= 20) return {	name:"**Potion of Supreme Healing**", link:"https://www.dndbeyond.com/magic-items/potion-of-healing" };
	if(roll <= 30) return { name:"**Potion of Invisibility**", link:"https://www.dndbeyond.com/magic-items/Potion-of-Invisibility" };
	if(roll <= 40) return { name:"**Potion of Speed**", link:"https://www.dndbeyond.com/magic-items/Potion-of-Speed" };
	if(roll <= 50) return { name:"**Spell Scroll (6th level)**", link:"https://www.dndbeyond.com/magic-items/spell-scroll" };
	if(roll <= 57) return { name:"**Spell Scroll (7th level)**", link:"https://www.dndbeyond.com/magic-items/spell-scroll" };
	if(roll <= 62) return { name:"**+3 Ammunition**", link:"https://www.dndbeyond.com/magic-items/ammunition-3" };
	if(roll <= 67) return { name:"**Oil of Sharpness**", link:"https://www.dndbeyond.com/magic-items/oil-of-sharpness" };
	if(roll <= 72) return { name:"**Potion of Flying**", link:"https://www.dndbeyond.com/magic-items/potion-of-flying" };
	if(roll <= 77) return { name:"**Potion of Cloud Giant Strength**", link:"https://www.dndbeyond.com/magic-items/potion-of-giant-strength" };
	if(roll <= 82) return { name:"**Potion of Longevity**", link:"https://aversten.obsidianportal.com/wiki_pages/potion-of-longevity" };
	if(roll <= 87) return { name:"**Potion of Vitality**", link:"https://www.dndbeyond.com/magic-items/potion-of-vitality" };
	if(roll <= 92) return { name:"**Spell Scroll (8th level)**", link:"https://www.dndbeyond.com/magic-items/spell-scroll" };
	if(roll <= 95) return { name:"**Horseshoes of a Zephyr**", link:"https://www.dndbeyond.com/magic-items/horseshoes-of-a-zephyr" };
	if(roll <= 98) return { name:"**Nolzur's Marvelous Pigments**", link:"https://aversten.obsidianportal.com/wiki_pages/nolzurs-marvelous-pigments" };
	if(roll <= 99) return { name:"**Bag of Devouring**", link:"https://www.dndbeyond.com/magic-items/bag-of-devouring" };
	if(roll <= 100)	return { name:"**Portable Hole**", link:"https://www.dndbeyond.com/magic-items/portable-hole" };
};
