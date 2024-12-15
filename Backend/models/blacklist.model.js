const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const blackListModel = mongoose.model("blacklist", blacklistSchema);

module.exports = { blackListModel };
