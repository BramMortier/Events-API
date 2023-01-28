const eventService = require("../services/eventService");
const { eventQueryParams } = require("../config/allowedParams");
const generateQuery = require("../utils/queryGenerator");

const getAllEvents = async (req, res) => {
    const query = generateQuery(req.query, eventQueryParams);
    const allEvents = await eventService.getAllEvents(query);
    res.send({ status: "OK", data: allEvents });
};

const getOneEvent = async (req, res) => {
    const { eventId } = req.params;
    const event = await eventService.getOneEvent(eventId);
    res.send({ status: "OK", data: event });
};

const createNewEvent = async (req, res) => {
    const { body } = req;

    if (!body.name || !body.location || !body.startDate || !body.endDate || !body.ticketSellers || !body.lineup) return;

    const newEvent = {
        name: body.name,
        location: body.location,
        startDate: body.startDate,
        endDate: body.endDate,
        ticketSellers: body.ticketSellers,
        lineup: body.lineup,
    };

    const createdEvent = await eventService.createNewEvent(newEvent);
    res.status(201).send({ status: "OK", data: createdEvent });
};

module.exports = {
    getAllEvents,
    getOneEvent,
    createNewEvent,
};
