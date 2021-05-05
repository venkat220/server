const Post = require("../models/posts");
const validationHandler = require("../validations/validationHandler");

exports.index = async (req, res) => {
    try {
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 10;

        const page = req.query.page ? parseInt(req.query.page) : 1;
        const posts = await Post.find().sort({ createdAt: -1 })
        .skip((page - 1) * pagination)
        .limit(pagination)
        .populate("user")
        .sort({ createdAt: -1});
        res.send(posts);
    } catch (err) {
        next(err);
    }
};

exports.show = async (req, res) => {
    try {
        const post = await Post.findOne({
            _id: req.params.id
        }).populate("user");
        res.send(post);
    }catch(err){
        next(err);
    }
}


exports.store = async(req, res, next) => {
    console.log(req.user)
  try {
      validationHandler(req);
      let post = new Post();
      post.title = req.body.titleName;
      post.description = req.body.description;
    //   post.image = req.file.filename;
      post.user = req.user;
      post = await post.save();
      res.send(post);
  }catch(err){
      next(err);
  }
}


exports.update = async(req, res, next) => {
    try {
        validationHandler(req);
        // this "Post.findById(req.params.id)" is method done by mongoose option
        let post = await Post.findById(req.params.id);
        if(!post || post.user != req.user.id){
            const error = new Error ("Wrong request");
            error.statusCode = 400;
            throw error;
        }
        post.description = req.body.description;
        post.title = req.body.titleName;
        post = await post.save();
        res.send(post);
    }catch(err){
        next(err);
    }
  }



  exports.delete = async(req, res, next) => {
    try {
        let post = await Post.findById(req.params.id);
        if(!post || post.user != req.user.id){
            const error = new Error ("Wrong request");
            error.statusCode = 400;
            throw error;
        }
        post = await post.delete();
        res.send({"message":"successfully removed the post"});
  
    }catch(err){
        next(err);
    }
  }