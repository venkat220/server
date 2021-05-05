const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true, select: false}, 
   mobileNumber: {type: Number, required:true },
   age: {type: Number, required:true },
   height: {type: Number, required:true },

// following: [{ type: Schema.Types.ObjectId, ref: "user"}]
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.validPassword = async function(candidatePassword){
    const result = await bcrypt.compare(candidatePassword, this.password);
    return result;
};

module.exports = mongoose.model("user", UserSchema);