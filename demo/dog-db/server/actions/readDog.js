import connectDB from "../index.js"
import Dog from "../models/Dog.js"
import mongoose from "mongoose"

export default async function readDog(data) {
    await connectDB()
    try {
        const { identifier } = data
        return await Dog.findById("6544133273daedac2cb3c2fd")
    } catch (e) {
        console.log(e)
        return false
    }
}