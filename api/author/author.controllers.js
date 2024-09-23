const author = require("../../models/Auther");

exports.authorGet = async (req, res, next) => {
  try {
    const authors = await author
      .find({}, "-createdAt -updatedAt")
      .populate("postId");
    res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

exports.authorCreate = async (req, res, next) => {
  try {
    const newAuthor = await author.create(req.body);
    return res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};
