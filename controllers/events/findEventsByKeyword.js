const { HttpError } = require("../../helpers");
const EventsService = require("../../services");

const findEventsByKeyword = async (req, res) => {
	const { page = 1, limit, query = "" } = req.query;

	const data = {
		page: parseInt(page),
		limit: parseInt(limit),
		query,
	};
	const { events, eventsCount } = await EventsService.eventsByKeyword(data);

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

module.exports = findEventsByKeyword;
