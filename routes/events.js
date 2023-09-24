const express = require("express");
const { validateBody, cloudUpload } = require("../middlewars");
const { eventSchema } = require("../models");
const router = express.Router();
const { events: controllers } = require("../controllers");

const cloudOptions = {
	fieldname: "picture",
	destFolder: "events",
	transformation: {
		width: 700,
		height: 700,
		crop: "fill",
		gravity: "auto",
	},
};

router.post(
	"/",
	cloudUpload(cloudOptions),
	validateBody(eventSchema),
	controllers.addEvent
);
router.get("/", controllers.getAllUserEvents);
router.get("/search", controllers.findEventsByKeyword);
router.get("/filter", controllers.findEventsByCategory);
router.get("/:id", controllers.getEventById);

router.put(
	"/:id",
	cloudUpload(cloudOptions),
	validateBody(eventSchema),
	controllers.updateEvent
);
router.delete("/:id", controllers.deleteEvents);

module.exports = router;
