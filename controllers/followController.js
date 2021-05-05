const User = require("../models/user");

exports.follow = async (req, res, next) => {
    copnsole.log(req.user)
    try {
        req.user.following.push(req.params.id);
        req.user.save();
        res.send({ message: "success" });
    } catch (err) {
        next(err);
    }
}
exports.fetchAll = async (req, res) => {
    try {
        const user = await User.find();
        res.send( user);
    } catch (err) {
        next(err);
    }
}; 

exports.getFollowers = async (req, res) => {
    try {
        const followers = await User.find({  
            "following" : req.query.id
        }).sort({ createdAt: -1 });
        res.send( followers);
    } catch (err) {
        next(err);
    }
}; 