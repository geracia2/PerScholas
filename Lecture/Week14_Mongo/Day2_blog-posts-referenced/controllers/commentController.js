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
    // first use the commentId to delete comment from comments collection
    await Comment.findByIdAndDelete(req.params.commentId);
    // then use the postId to find post...
    await Post.findByIdAndUpdate(req.params.postId, {
      // update with a pull (remove) the ref Id from comment we deleted
      $pull: {
        // ... from the comments array
        comments: req.params.commentId,
      },
    });
  } catch (err) {
    console.log(err.message);
  }

  res.redirect(`/posts/${req.params.postId}`);
};

module.exports.index = async (req, res) => {
  try {
    // target the comments property
    const post = await Post.findById(req.params.postId).populate("comments");
    res.send(post.comments);
  } catch (err) {
    console.log(err.message);
    res.redirect(`/posts/${req.params.postId}`);
  }
};

module.exports.edit = async (req, res) => {
  try {
    // find the post and filter it's comments property array
    const comment = await Comment.findById(req.params.commentId);
    res.render("comments/Edit", {
      postId: req.params.postId,
      comment: comment,
    });
  } catch (err) {
    console.log(err.message);
    res.redirect(`/posts/${req.params.postId}`);
  }
};

module.exports.update = async (req, res) => {
  try {
    // update a comment by updating an item in the comments property in post
    await Comment.findByIdAndUpdate(req.params.commentId, req.body)
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/posts/${req.params.postId}`);
};
