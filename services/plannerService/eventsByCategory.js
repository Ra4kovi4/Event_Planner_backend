const { Events } = require("../../models");

const eventsByCategory = async (data) => {
	const { page, limit, category } = data;

	const skip = (page - 1) * limit;

	const events = await Events.find({ category }).skip(skip).limit(limit);

	const eventsCount = await Events.find({
		category: category,
	}).countDocuments();
	console.log(eventsCount);

	return { events, eventsCount };
};
module.exports = { eventsByCategory };
