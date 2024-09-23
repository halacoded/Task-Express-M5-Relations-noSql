const { model, Schema } = require("mongoose");
const author = require("./Auther");

const PostSchema = new Schema({
  title: String,
  body: String,
  authorId: { type: Schema.Types.ObjectId, ref: "author" },
});
const Post = model("Post", PostSchema);
module.exports = Post;
