import mongoose from "mongoose";


const optSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
    otpHash: {
        type: String,
        required: [true, "OTP hash is required"],
    }
}, {
    timestamps: true
})


const optModel = mongoose.model("Otp", optSchema);

export default optModel;