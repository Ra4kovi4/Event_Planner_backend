const { Events } = require('../../models');

const createEvent = async (
    title,
    description,
    selectDate,
    selectTime,
    location,
    category,
    picture,
    priority
) => {
    const event = await Events.create({
        title,
        description,
        selectDate,
        selectTime,
        location,
        category,
        picture,
        priority,
    });
    return event;
};
module.exports = { createEvent };
