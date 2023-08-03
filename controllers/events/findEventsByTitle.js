const { HttpError } = require("../../helpers");
const EventsService = require("../../services");

const findEventsByTitle = async (req, res) => {
	const { page = 1, limit = 6, title = "" } = req.query;
	const data = {
		page: parseInt(page),
		limit: parseInt(limit),
		title,
	};
	const result = await EventsService.findEvents(data);

	if (result === null) {
		throw HttpError(404, "Not found");
	}

	res.json({
		status: "success",
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = findEventsByTitle;
