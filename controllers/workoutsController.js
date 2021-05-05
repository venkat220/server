const Workouts = require("../models/workouts");
const validationHandler = require("../validations/validationHandler");


exports.index = async (req, res) => {
        try {
            const workouts = await Workouts.find({
            }).sort({ createdAt: -1 });
            res.send( workouts);
        } catch (err) {
            next(err);
        }
};  

exports.indexQuery = async (req, res) => {
        try {
            const workouts = await Workouts.find({
                "level": req.query.level
            }).sort({ createdAt: -1 });
            res.send( workouts);
        } catch (err) {
            next(err);
        }
}

exports.show = async (req, res) => {
    try {
        const workouts = await Workouts.findOne({
            _id: req.params.id
        });
        res.send(workouts);
    }catch(err){
        next(err);
    }
}


exports.store = async(req, res, next) => {
  try {
      validationHandler(req);
      let workouts = new Workouts();
      workouts.description = req.body.description;
      workouts.name= req.body.name;
      workouts.level= req.body.level;
     
    //   expense.image = req.file.filename;
    workouts = await workouts.save();
      res.send(workouts);

     }catch(err){
      next(err);
     }
}



exports.update = async(req, res, next) => {
    try {
        validationHandler(req);
        // this "Post.findById(req.params.id)" is method done by mongoose option
        let workout = await Workouts.findById(req.params.id);
        workout.description = req.body.description;
        workout = await workout.save();
        res.send(workout);
  
    }catch(err){
        next(err);
    }
  }



  exports.delete = async(req, res, next) => {
    try {
        let workouts = await Workouts.findById(req.params.id);
        workouts = await workouts.delete();
        res.send({"message":"successfully removed the workout"});
  
    }catch(err){
        next(err);
    }
  }
