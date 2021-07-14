const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { Visitor, VisitorSchema } = require("./Visitor")

// Create Schema
const SessionSchema = new Schema({
  linkedUser: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  address2: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  visitors: {
    type: [VisitorSchema],
    required: false
  },
  likes: {
    type: Number,
    default: 0,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

SessionSchema.query.byLinkedUser = function(userId) {
  return this.where({linkedUser : userId})
}
SessionSchema.virtual('visitorCount').get(function(){
  return this.visitors.length
})


module.exports = {
  Session : mongoose.model("OpenHouse_sessions", SessionSchema),
  SessionSchema : SessionSchema
}