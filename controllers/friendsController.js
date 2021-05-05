const Friends = require("../models/friend");
const validationHandler = require("../validations/validationHandler");
const url = require('url');  
const querystring = require('querystring');

exports.index = async (req, res) => {
    try {
        const friends = await Friends.find({
        }).sort({ createdAt: -1 });
        res.send( friends);
    } catch (err) {
        next(err);
    }
};  
 

exports.indexQuery = async (req, res) => {
    try {
        const friends = await Friends.find({
            "email": req.query.email
        }).sort({ createdAt: -1 });
        res.send( friends);
    } catch (err) {
        next(err);
    }
}

exports.indexQuery = async (req, res) => {
    try {
        const friends = await Friends.find({
            "name": req.query.name
        }).sort({ createdAt: -1 });
        res.send( friends);
    } catch (err) {
        next(err);
    }
}


exports.show = async (req, res, next) => {

    try {
        const friends = await Friends.findOne({
            _id: req.params.id
            // "contactNumber": req.query.number
        });
        res.send(friends);
    }catch(err){
        next(err);
    }
}


exports.store = async(req, res, next) => {
  try {
      validationHandler(req);
      let friends = new Friends();
      friends.name = req.body.name;
      friends.phone= req.body.phone;
      friends.email= req.body.email;
      friends.active= req.body.active;
      friends.bmi= req.body.bmi;
    //   expense.image = req.file.filename;
    friends = await friends.save();
      res.send(friends);

     }catch(err){
      next(err);
     }
}



exports.update = async(req, res, next) => {
    try {
        validationHandler(req);
        // this "Post.findById(req.params.id)" is method done by mongoose option
        let friends = await Friends.findById(req.params.id);
        friends.name = req.body.name;
        friends.phone= req.body.phone;
        friends.email= req.body.email;
        friends.active= req.body.active;
        friends.bmi= req.body.bmi;
        friends = await clients.save();
        res.send(friends);
  
    }catch(err){
        next(err);
    }
  }



  exports.delete = async(req, res, next) => {
    try {
        let friends = await Friends.findById(req.params.id);
        friends = await friends.delete();
        res.send({"message":"successfully removed a friend"});
  
    }catch(err){
        next(err);
    }
  }