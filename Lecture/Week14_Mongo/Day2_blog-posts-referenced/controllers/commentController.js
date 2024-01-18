const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

module.exports.create = async (req, res) => {
  try {
    // create a comment by updating the comments property in post
    // we are creating an id, independent of a post right now
    const comment = await Comment.create(req.body);
    //find the post..
    await Post.findByIdAndUpdate(req.params.postId, {
      // ... push the new comment's document's ID ...
      $push: {
        // ... into the comments array
        // in schema= type: mongoose.Types.ObjectId
        comments: comment._id,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/posts/${req.params.postId}`);
};

module.exports.delete = async (req, res) => {
  try {
    // delete a comment by updating the comments property in post
  } catch (err) {
    console.log(err.message);
  }

  res.redirect(`/posts/${req.params.postId}`);
};

module.exports.index = async (req, res) => {
  try {
    // target the comments property
  } catch (err) {
    console.log(err.message);
    res.redirect(`/posts/${req.params.postId}`);
  }
};

module.exports.edit = async (req, res) => {
  try {
    // find the post and filter it's comments property array
  } catch (err) {
    console.log(err.message);
    res.redirect(`/posts/${req.params.postId}`);
  }
};

module.exports.update = async (req, res) => {
  try {
    // update a comment by updating an item in the comments property in post
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/posts/${req.params.postId}`);
};
