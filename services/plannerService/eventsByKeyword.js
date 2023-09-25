const { Events } = require('../../models');

const eventsByKeyword = async data => {
    const { page, limit, query } = data;
    const skip = (page - 1) * limit;

    const events = await Events.find(
        {
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
            ],
        },
        null,
        { skip, limit }
    );

    const eventsCount = await Events.find({
        $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
        ],
    }).countDocuments();

    return { events, eventsCount };
};
module.exports = { eventsByKeyword };
