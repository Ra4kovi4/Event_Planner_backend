const { HttpError } = require("../../helpers");
const EventsService = require("../../services");

const findEventsByTitle = async (req, res) => {
	const { page = 1, limit, title = "" } = req.query;

	const data = {
		page: parseInt(page),
		limit: parseInt(limit),
		title,
	};
	const { events, eventsCount } = await EventsService.findEvents(data);

	if (events === null) {
		throw HttpError(404, "Not found");
	}

	res.json({
		status: "success",
		code: 200,
		total: eventsCount,
		data: {
			events,
		},
	});
};

module.exports = findEventsByTitle;
