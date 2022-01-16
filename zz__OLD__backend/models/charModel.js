const mongoose = require("mongoose");

const charSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodstatus: {
      type: String,
      required: false,
    },
    position: {
      type: String,
    },
    yearLevel: {
      type: String,
    },
    summary: {
      type: String,
      required: true,
    },
    writtenBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Char = mongoose.model("Char", charSchema);

module.exports = Char;
