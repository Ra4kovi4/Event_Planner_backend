const { HttpError } = require("../../helpers");
const EventsService = require("../../services");

const updateEvent = async (req, res) => {
	const { id } = req.params;

	const result = await EventsService.updateEvent(id, req.body);

	if (result === null) {
		throw HttpError(404, "Not found");
	}

	res.json({
		status: "success",
		code: 200,
		message: "contact updated",
		data: result,
	});
};

module.exports = updateEvent;
