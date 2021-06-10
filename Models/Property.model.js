const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  beds: {
    type: String,
    required: true,
  },
  baths: {
    type: String,
    required: true,
  },
  sqft: {
    type: String,
    required: true,
  },
  booking: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  telnumber: {
    type: String,
    required: true,
  },
});

const Property = mongoose.model("property", PropertySchema);
module.exports = Property;
