const { HttpError } = require("../../helpers");
const EventsService = require("../../services");

const deleteEvents = async (req, res) => {
	const { id } = req.params;

	const result = await EventsService.deleteEvent(id);

	if (result === null) {
		throw HttpError(404, "Not found");
	}

	res.json({
		status: "success",
		code: 200,
		message: "contact deleted",
		data: {
			result,
		},
	});
};

module.exports = deleteEvents;
