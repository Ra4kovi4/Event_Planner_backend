const { Events } = require("../../models");

const updateEvent = async (id, data) => {
	const event = await Events.findByIdAndUpdate(id, data, { new: true });
	return event;
};
module.exports = { updateEvent };
