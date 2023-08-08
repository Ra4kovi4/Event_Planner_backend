const { Events } = require("../../models");

const findEvents = async (data) => {
	const { page, limit, title } = data;
	const skip = (page - 1) * limit;

	const events = await Events.find(
		{ title: { $regex: title, $options: "i" } },
		{ skip, limit }
	);
	return events;
};
module.exports = { findEvents };
