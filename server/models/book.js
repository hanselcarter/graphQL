const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  authorId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
