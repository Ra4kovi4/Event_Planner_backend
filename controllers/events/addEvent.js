const EventsService = require("../../services");

const addEvent = async (req, res) => {
	const {
		title,
		description,
		selectDate,
		selectTime,
		location,
		category,
		picture,
		priority,
	} = req.body;
	let newPicture = null;
	if (!picture) {
		newPicture = "https://i.ibb.co/J5XxVtJ/default.jpg";
	} else {
		newPicture = picture;
	}
	let event = await EventsService.createEvent(
		title,
		description,
		selectDate,
		selectTime,
		location,
		category,
		newPicture,
		priority
	);

	await event.save();

	res.json({
		code: 200,
		status: "Success",
		data: event,
	});
};

module.exports = addEvent;
