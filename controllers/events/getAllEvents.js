const EventsService = require('../../services');

const getAllUserEvents = async (req, res) => {
    const { events, eventsCount } = await EventsService.getAllEvents(req.query);

    res.json({
        code: 200,
        status: 'Success',
        total: eventsCount,
        data: events,
    });
};

module.exports = getAllUserEvents;
