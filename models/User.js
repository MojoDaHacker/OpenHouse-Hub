const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { SessionSchema } = require("./Session");


// Create Schema
const UserProfileSchema = new Schema({
  nickname: String,
  cell: Number,
  email: String,
  group: String,
  company: String,
  servicing: [String]
});

// Create Schema
const UserSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  hasActiveSession: {
    type: Boolean,
    default: false,
    required: true
  },
  activeSession : SessionSchema,
  completedSessions: [SessionSchema],
  scheduledSessions: [SessionSchema],
  profile: {
    type: UserProfileSchema,
    default: {}
  },
  createdTimestamp: {
    type: Date,
    default: Date.now
  }
})

UserSchema.virtual('fullName').get(function() {
  return this.name.first + ' ' + this.name.last;
}).set(function(v) {
  this.name.first = v.substr(0, v.indexOf(' '));
  this.name.last = v.substr(v.indexOf(' ') + 1);
});

// UserSchema.virtual('hasActiveSession').get(function() {
//   return this.name.first + ' ' + this.name.last;
// }).set(function(v) {
//   this.name.first = v.substr(0, v.indexOf(' '));
//   this.name.last = v.substr(v.indexOf(' ') + 1);
// });



module.exports = {
  User : mongoose.model("users", UserSchema),
  UserSchema : UserSchema
}