const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    following: { type: String, required: true },
    follower: { type: Number, required: true },
    createdBy:{type:ObjectId, ref:'user'}
});

module.exports = mongoose.model("friend", FriendSchema);