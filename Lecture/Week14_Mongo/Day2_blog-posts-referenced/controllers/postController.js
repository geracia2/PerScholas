const Posts = require("../models/postModel");
const Comment = require("../models/commentModel");
const posts = require("../models/posts");

module.exports.seed = async (req, res) => {
  try {
    await Posts.deleteMany({});
    await Comment.deleteMany({});

    for (let post of posts) {
      let comments = post.comments;
      post.comments = [];

      console.log(comments);

      const seededComments = await Comment.insertMany(comments);
      console.log(seededComments);
      const commentIds = seededComments.map((comment) => comment._id);
      post.comments = commentIds;

      await Posts.create(post);
      // another way of doing it
      // for (let comment of comments) {
      //     const commentDoc = await Comment.create(comment)
      //     await Posts.findByIdAndUpdate(postDoc._id, {
      //         $push: {
      //             comments: commentDoc._id
      //         }
      //     })
      // }
    }
  } catch (err) {
    console.log(err);
  }
  // await Posts.deleteMany({})
  // // this will seed the posts collection, but with reference relationships we need to also seed posts
  // await Comment.deleteMany({})
  // await Posts.create(posts)
  res.redirect("/posts");
};

module.exports.index = async (req, res) => {
  // timeStamp gives us createdAt, 1 will give most recent last, -1 reverse
  const posts = await Posts.find().sort({ createdAt: -1 });
  res.render("posts/Index", { posts });
};

module.exports.new = async (req, res) => {
  res.render("posts/New");
};

module.exports.delete = async (req, res) => {
  try {
    // find the post, delete it from DB, but store it in memory (as post)
    const posts = await Posts.findByIdAndDelete(req.params.id);
    console.log(posts.comments);
    // deleting all comment where the id..
    await Comment.deleteMany({
      // ... matches any comment in ids ..
      _id: {
        // ... in the given array (from memory)
        $in: posts.comments,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect("/posts");
};

module.exports.update = async (req, res) => {
  await Posts.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/posts/${req.params.id}`);
};

module.exports.create = async (req, res) => {
  console.log(req.body);
  try {
    await Posts.create(req.body);
    res.redirect("/posts");
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.edit = async (req, res) => {
  const post = await Posts.findById(req.params.id);
  console.log(post);
  console.log("edit route");
  res.render("posts/Edit", { post });
};

module.exports.show = async (req, res) => {
  // bc we are handling a reference setup, we need to populate
  // the post with additional information with .populate('reference')
  const post = await Posts.findById(req.params.id).populate("comments");
  console.log(post);
  res.render("posts/Show", { post });
};
