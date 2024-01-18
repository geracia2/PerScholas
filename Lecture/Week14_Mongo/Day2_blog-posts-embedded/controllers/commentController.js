const Post = require("../models/postModel");


module.exports.create = async (req, res) => {
  // create a comment by updating the comments property in post
  try {
    await Post.findByIdAndUpdate(req.params.postId, {
      // mongoDB syntax to push. push req.body to comments proporty of a specific post
      // getting this from show view, form, action, post._id
      //
      $push: {
        // comments: req.body
        comments: { text: req.body.text, user: "Billy" },
      },
    });
  } catch (error) {
    console.log(error.message);
  }
  res.redirect(`/posts/${req.params.postId}`);
};

module.exports.delete = async (req, res) => {
  // delete a comment by updating the comments property in post
  await Post.findByIdAndUpdate(req.params.postId, {
    // route: '/:postId/:commentId',
    // remove (or pull out) a sub-document
    // essentially= postID.pull().comments[commentID]:
    $pull: {
      // ... from comments array..
      comments: {
        // ... with a matching ID
        // _id is key, we are getting they id with : req.params.commentID
        _id: req.params.commentId,
      },
    },
  });
  res.redirect(`/posts/${req.params.postId}`);
};

module.exports.index = async (req, res) => {
  // target the comments property
  const postSolo = await Post.findById(req.params.postId);
  // from here you would send this to a soloed comments index view
  res.send(postSolo.comments);
};

module.exports.show = async (req, res) => {
  // find the post and filter it's comments property array
  const postSoloed = await Post.findById(req.params.postId);
  // have the post, look at comments array, find(method)
  //
  const commentSoloed = await postSoloed.comments.find(
    (comment) => comment._id == req.param.commentID
  );
  res.render("comments/Edit", { postId: req.params.postId, comment });
};

module.exports.update = async (req, res) => {
  // update a comment by updating an item in the comments property in post
  const postSoloed = await Post.findById(req.params.postId);
  const commentSoloed = await postSoloed.comments.find(
    (comment) => comment._id == req.param.commentID
  );
  // update in memory
  commentSoloed.text = req.body.text;
  // another way to update a document, save current state of queried document
  // .save() is a mongoose method
  await postSoloed.save();

  res.redirect(`/posts/${req.params.postId}`);
};
