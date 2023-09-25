const { Events } = require('../../models');
const { HttpError } = require('../../helpers');

const getAllEvents = async data => {
    const { page = 1, limit } = data;
    const skip = (page - 1) * limit;
    const events = await Events.find({}, '-createdAt -updatedAt', {
        skip,
        limit,
    }).sort({ createdAt: -1 });
    const eventsCount = await Events.find({}).countDocuments();

    return { events, eventsCount };
};

module.exports = { getAllEvents };
