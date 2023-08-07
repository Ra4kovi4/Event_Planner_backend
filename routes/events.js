const express = require("express");
const { validateBody, upload } = require("../middlewars");
const { eventSchema } = require("../models");
const router = express.Router();
const { events: controllers } = require("../controllers");

router.post("/", validateBody(eventSchema), controllers.addEvent);
router.get("/", controllers.getAllUserEvents);
router.get("/search", controllers.findEventsByTitle);
router.get("/:id", controllers.getEventById);
router.put("/:id", controllers.updateEvent);
router.delete("/:id", controllers.deleteEvents);

module.exports = router;
