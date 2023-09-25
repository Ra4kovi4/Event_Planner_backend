const { Events } = require('../../models');

const deleteEvent = async id => {
    const deleteEvent = await Events.findByIdAndDelete(id);
    return deleteEvent;
};
module.exports = { deleteEvent };
