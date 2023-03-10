const { mongoose, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
    },
    heading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      validate: [sizeLimit, "Limit reached"],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

function sizeLimit(val) {
  return val.length <= 10;
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
