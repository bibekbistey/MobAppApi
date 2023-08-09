const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
     
    },
    doctorId: {
      type: String,
      
    },
    date: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
    time: {
      type: String,
      
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
