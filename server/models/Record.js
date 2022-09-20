const mongoose = require("mongoose");

const { Schema } = mongoose;

const recordSchema = new Schema({
  gameTitle:{
    type: String
  },
  points: {
    type: Number,
    required: true,
  },

  recordDate: {
    type: Date,
    default: Date.now,
  },
});



module.exports = recordSchema;
