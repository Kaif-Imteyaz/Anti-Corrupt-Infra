// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, enum: ["citizen", "ward_member", "gram_panchayat"], default: "citizen" },
//   govCredential: String, // For officials
// });

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["citizen", "ward_member", "gram_panchayat"], default: "citizen", required: true },
  govCredential: { type: String, required: true }, // For officials
}, //{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
