const { HttpError } = require("../../helpers");
const EventsService = require("../../services");

const findEventsByCategory = async (req, res) => {
	
	const { page = 1, limit = 8, category = "" } = req.query;
	const data = {
		page: parseInt(page),
		limit: parseInt(limit),
		category,
	};
	const { events, eventsCount } = await EventsService.eventsByCategory(data);

	if (!events || events.length === 0) {
		return res.status(404).json({ code: 404, message: "Not Found" });
	}

	res.json({
		status: "success",
		code: 200,
		total: eventsCount,
		data: events,
	});
};

module.exports = findEventsByCategory;
