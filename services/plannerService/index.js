const { createEvent } = require("./createEvent");
const { getAllEvents } = require("./getAllEvents");
const { deleteEvent } = require("./deleteEvents");
const { findEvents } = require("./findEvent");
const { eventById } = require("./eventsById");
module.exports = {
	createEvent,
	getAllEvents,
	deleteEvent,
	findEvents,
	eventById,
};
