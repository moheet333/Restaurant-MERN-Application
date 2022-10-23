const mongoose = require("mongoose");

const userEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const useremailModel = mongoose.model("userEmail", userEmailSchema);
module.exports = useremailModel;
