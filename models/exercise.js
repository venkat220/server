const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
        name: { type: String, required: false },
        description: { type: String, required: false },
        sets: { type: Number, required: false },
        caloriesBurnt: { type: String, required: false },
        workoutStage: { type: String, required: false },
        user:{type:ObjectId, ref:'user'}
});

module.exports = mongoose.model("exercises", ExercisesSchema); 