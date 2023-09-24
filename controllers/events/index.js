const { ctrlWrapper } = require("../../helpers");
const addEvent = require("./addEvent");
const getAllUserEvents = require("./getAllEvents");
const deleteEvents = require("./deleteEvents");
const getEventById = require("./getEventsById");
const findEventsByKeyword = require("./findEventsByKeyword");
const updateEvent = require("./updateEvent");
const findEventsByCategory = require("./findEventsByCategory");

module.exports = {
	addEvent: ctrlWrapper(addEvent),
	getAllUserEvents: ctrlWrapper(getAllUserEvents),
	deleteEvents: ctrlWrapper(deleteEvents),
	getEventById: ctrlWrapper(getEventById),
	findEventsByKeyword: ctrlWrapper(findEventsByKeyword),
	updateEvent: ctrlWrapper(updateEvent),
	findEventsByCategory: ctrlWrapper(findEventsByCategory),
};
