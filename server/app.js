require("dotenv").config();

// server/app.js
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
const path = require("path");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/byebyas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();
const session = require("express-session");

const MongoStore = require("connect-mongo")(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/api", (req, res) => {
  console.log("hello");
});

app.listen(5555, () => {
  console.log("Server listening on Port 5555");
});

module.exports = app;
