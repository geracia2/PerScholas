const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logsSchema = new Schema(
  {
    title: { type: String, required: true },
    entry: { type: String },
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Compile model from schema
// Logs is the
var Logs = mongoose.model("Logs", logsSchema);

module.exports = Logs;
