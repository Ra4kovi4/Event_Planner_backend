const { Events } = require("../../models");

const eventById = async (id) => {
	const event = await Events.findById(id);
	return event;
};
module.exports = { eventById };
