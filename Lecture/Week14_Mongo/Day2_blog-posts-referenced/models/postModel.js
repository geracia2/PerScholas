const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    subject: { type: String },
    body: { type: String },
    user: { type: String, default: "Bob" },
    // comments field here
    comments: [
      {
        // id referencing comment document
        // _id: new ObjectId"..." as opposed to string
        type: mongoose.Types.ObjectId,
        // what collection to look in
        ref: "comments",
        // in this way we do not need to nest posts.postID.comments.commentID
        // with a bunch of information.
        // we are requesting a smaller amount of information, IDs first
        // then if we need more we can request it
        // also updating or deleting the comment will be easier, since you just need the id
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", postSchema);

module.exports = Post;
