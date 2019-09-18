module.exports = (roll) => {
	if(roll <= 50) return { name:"**Potion of Healing**", link:"https://www.dndbeyond.com/magic-items/potion-of-healing" };
	if(roll <= 60) return { name:"**Spell Scroll (Cantrip)**", link:"https://www.dndbeyond.com/magic-items/spell-scroll" };
	if(roll <= 70) return { name:"**Potion of Climbing**", link:"https://www.dndbeyond.com/magic-items/potion-of-climbing" };
	if(roll <= 90) return { name:"**Spell Scroll (1st level)**", link:"https://www.dndbeyond.com/magic-items/spell-scroll" };
	if(roll <= 94) return { name:"**Spell Scroll (2nd level)**", link:"https://www.dndbeyond.com/magic-items/spell-scroll" };
	if(roll <= 98) return { name:"**Potion of Greater Healing**", link:"https://www.dndbeyond.com/magic-items/potion-of-healing" };
	if(roll === 99) return { name:"**Bag of Holding**", link:"https://www.dndbeyond.com/magic-items/bag-of-holding" };
	if(roll === 100) return { name:"**Driftglobe**", link:"https://aversten.obsidianportal.com/wikis/driftglobe" };
};
