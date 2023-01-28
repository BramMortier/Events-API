const express = require("express");
const eventRouter = require("./routes/eventRoutes");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
require("dotenv").config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRouter);

mongoose.connection.once("open", () => {
    console.log("DB connection established");
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});
