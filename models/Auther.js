const { model, Schema } = require("mongoose");
const Post = require("./Post");
const AuthorSchema = new Schema({
  name: { type: String },
  postId: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const author = model("author", AuthorSchema);
module.exports = author;
