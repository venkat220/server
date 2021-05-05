const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    // image: { type: String, required: true },
    
    description: { type: String, required: true },
    title: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    createdAt: {type: Date, default: Date.now() }
});

module.exports = mongoose.model("post", PostSchema);