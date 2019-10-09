module.exports = async (embed) => {
	const num = d6();
	embed.addField("Attack Roll (1×D20 + Modifiers)", "1 - Critical Failure!", false)
		.addField("Outcome", "Miss", true);
	return embed;
};
