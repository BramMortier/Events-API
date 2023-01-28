const express = require("express");
const eventController = require("../controllers/eventController");

const router = express.Router();

router.get("/", eventController.getAllEvents);
router.post("/", eventController.createNewEvent);
router.get("/:eventId", eventController.getOneEvent);

module.exports = router;
