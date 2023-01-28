const Event = require("../models/eventModel");

const getAllEvents = async (query) => {
    const allEvents = await Event.find(query);
    return allEvents;
};

const getOneEvent = async (eventId) => {
    const event = await Event.findOne({ _id: eventId });
    return event;
};

const createNewEvent = async (newEvent) => {
    const createdEvent = await Event.create(newEvent);
    return createdEvent;
};

module.exports = {
    getAllEvents,
    getOneEvent,
    createNewEvent,
};
