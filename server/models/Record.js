const mongoose = require("mongoose");

const { Schema } = mongoose;

const recordSchema = new Schema({
  turns: {
    type: Number,
    required: true,
  },

  recordDate: {
    type: Date,
    default: Date.now,
  },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
