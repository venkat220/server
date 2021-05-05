const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    level: {type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("workouts", WorkoutsSchema);