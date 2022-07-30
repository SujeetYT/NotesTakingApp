const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  description:   String,
});

const Note = mongoose.model("Note", blogSchema);
module.exports = Note;
