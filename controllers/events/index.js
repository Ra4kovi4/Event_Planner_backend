const { ctrlWrapper } = require("../../helpers");
const addEvent = require("./addEvent");
const getAllUserEvents = require("./getAllEvents");
const deleteEvents = require("./deleteEvents");
const getEventById = require("./getEventsById");
const findEventsByTitle = require("./findEventsByTitle");
module.exports = {
	addEvent: ctrlWrapper(addEvent),
	getAllUserEvents: ctrlWrapper(getAllUserEvents),
	deleteEvents: ctrlWrapper(deleteEvents),
	getEventById: ctrlWrapper(getEventById),
	findEventsByTitle: ctrlWrapper(findEventsByTitle),
};
