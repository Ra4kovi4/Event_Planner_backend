const { createEvent } = require('./createEvent');
const { getAllEvents } = require('./getAllEvents');
const { deleteEvent } = require('./deleteEvents');
const { eventsByKeyword } = require('./eventsByKeyword');
const { eventById } = require('./eventsById');
const { updateEvent } = require('./updateEvent');
const { eventsByCategory } = require('./eventsByCategory');
module.exports = {
    createEvent,
    getAllEvents,
    deleteEvent,
    eventsByKeyword,
    eventById,
    updateEvent,
    eventsByCategory,
};
