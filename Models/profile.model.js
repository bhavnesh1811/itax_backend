const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  name: { type: String, required: true },
  business_name: { type: String, required: true },
  pan_no: { type: String, required: true },
  gst_no: { type: String, required: true },
  address: { type: String, required: true },
  incorporation_date: { type: String, required: true },
  aadhaar_no: { type: String, required: true },
  pincode: { type: Number, required: true },
});

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = { ProfileModel };
