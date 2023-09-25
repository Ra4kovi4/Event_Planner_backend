const { HttpError } = require('../../helpers');
const EventsService = require('../../services');
const cloudinary = require('cloudinary').v2;

const updateEvent = async (req, res) => {
    const { id } = req.params;
    let newPicture = null;

    const existedEvent = await EventsService.eventById(id);

    if (req.file) {
        const preview = cloudinary.url(req.file.filename, {});
        newPicture = preview;
    } else {
        newPicture = existedEvent.picture;
    }

    const data = { ...req.body, picture: newPicture };

    const result = await EventsService.updateEvent(id, data);

    if (result === null) {
        throw HttpError(404, 'Not found');
    }

    res.json({
        status: 'success',
        code: 200,
        message: 'contact updated',
        data: result,
    });
};

module.exports = updateEvent;
