import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    age: Number
})

export const Patient = mongoose.model('Patient', schema)