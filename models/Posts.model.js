const { Schema, model } = require("mongoose");

require('../models/User.model')

const postSchema = new Schema({
      message: String, 
      userId: {
          type: Schema.Types.ObjectId,
          // which collection it's coming from
          ref: 'User'
      }
});

const PostModel = model("posts", postSchema);

module.exports = PostModel;
