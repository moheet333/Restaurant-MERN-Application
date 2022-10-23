const mongoose = require("mongoose");

const userNameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const usernameModel = mongoose.model("userName", userNameSchema);
module.exports = usernameModel;
