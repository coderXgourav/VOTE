const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  const dbUrl = process.env.DB_URL;
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Mongo DB connected");
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};
