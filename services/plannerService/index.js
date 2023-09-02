const { createEvent } = require("./createEvent");
const { getAllEvents } = require("./getAllEvents");
const { deleteEvent } = require("./deleteEvents");
const { findEvents } = require("./findEvent");
const { eventById } = require("./eventsById");
const { updateEvent } = require("./updateEvent");
const { eventsByCategory } = require("./eventsByCategory");
module.exports = {
	createEvent,
	getAllEvents,
	deleteEvent,
	findEvents,
	eventById,
	updateEvent,
	eventsByCategory,
};
