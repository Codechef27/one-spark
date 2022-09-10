const mongoose = require("mongoose");

const { Schema } = mongoose;

const recordSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
  recordDate: {
    type: Date,
    default: Date.now,
  },
  game: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
  ],
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
