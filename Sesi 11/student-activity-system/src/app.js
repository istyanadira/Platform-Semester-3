require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});

const authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

const logger = require("./middlewares/logger");
app.use(logger);

const activityRoutes = require("./routes/activityRoutes");
app.use(activityRoutes);