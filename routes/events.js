const express = require("express");
const { validateBody, upload } = require("../middlewars");
const { eventSchema } = require("../models");
const router = express.Router();
const { events: controllers } = require("../controllers");

router.post("/", controllers.addEvent);
router.get("/", controllers.getAllUserEvents);
router.get("/search", controllers.findEventsByTitle);
router.get("/:id", controllers.getEventById);
router.delete("/:id", controllers.deleteEvents);

module.exports = router;
