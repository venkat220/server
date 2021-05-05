const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const passportJWT = require("./middlewares/passportJWT")();
const errorHandler = require("./middlewares/errorHandler");
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const workoutsRoutes = require("./routes/workout");
const friendsRoutes = require("./routes/friendsRoute");
const exercisesRoutes = require("./routes/exercise");
const followRoutes = require("./routes/follow");

const app = express();



app.use(cors());

app.enable("trust proxy");

mongoose.Promise = global.Promise;

uri = "mongodb+srv://venkat:iphone@cluster0.vfbif.mongodb.net/apis"

mongoose.connect(uri, { useNewUrlParser: true }, (err, db) => {});

// mongoose.connect("mongodb+srv://venkat:iphone@cluster0.vfbif.mongodb.net/apis", {
//   useNewUrlParser: true,
// }, { useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(passportJWT.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/exercises", exercisesRoutes);
app.use("/api/workouts", workoutsRoutes);
app.use("/api/friends", friendsRoutes);
app.use("/api/follow", followRoutes);

app.use(errorHandler);

app.listen(8000, () => {
    console.log("server has been connected..")
});