import mongoose from "mongoose";

const hospitalHourSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    day: {
        type: String,
        required: true,
        enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    open: {
        type: String,
        required: true
    },
    close: {
        type: String,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    contactNumber: {
        type: String,
        required: true
    },
    workingIn: {
        type: [hospitalHourSchema],
        required: true
    }
}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema);