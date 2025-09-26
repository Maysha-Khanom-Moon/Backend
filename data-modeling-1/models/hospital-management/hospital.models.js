import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    availableBeds: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true })

export const Hospital = mongoose.model("Hospital", hospitalSchema);