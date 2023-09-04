const EventsService = require("../../services");
const cloudinary = require("cloudinary").v2;

const addEvent = async (req, res) => {
	const {
		title,
		description,
		selectDate,
		selectTime,
		location,
		category,
		priority,
	} = req.body;

	let newPicture = null;

	if (req.file) {
		const preview = cloudinary.url(req.file.filename, {});
		newPicture = preview;
	} else {
		newPicture = "https://i.ibb.co/J5XxVtJ/default.jpg";
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
		code: 201,
		status: "Created",
		data: event,
	});
};

module.exports = addEvent;
