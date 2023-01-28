const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    ticketSellers: {
        type: [
            {
                name: { type: String, required: true },
                link: { type: String, required: true },
            },
        ],
    },
    lineup: {
        type: [
            {
                name: { type: String, required: true },
                headliner: Boolean,
                popularSongs: [String],
                members: {
                    type: [
                        {
                            firstname: { type: String, required: true },
                            lastname: { type: String, required: true },
                            artistName: String,
                            age: Number,
                        },
                    ],
                },
            },
        ],
        required: true,
    },
});

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;
