const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mayuri123@test.wjg1r.mongodb.net/unit4c3"
  );
};