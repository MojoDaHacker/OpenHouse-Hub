const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VisitorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  realtor: {
    type: Boolean,
    required: true
  },
});

module.exports = {
  Visitor : mongoose.model("Visitor", VisitorSchema),
  VisitorSchema : VisitorSchema,
}