const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserScheme.plugin(mongoosePaginate);

module.exports = mongoose.model("user", UserScheme);
