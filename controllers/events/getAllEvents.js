const EventsService = require("../../services");

const getAllUserEvents = async (req, res) => {
	const events = await EventsService.getAllEvents(req.query);

	res.json({
		code: 200,
		status: "Success",
		data: events,
	});
};

module.exports = getAllUserEvents;
