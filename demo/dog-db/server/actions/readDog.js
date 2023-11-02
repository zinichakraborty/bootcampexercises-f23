import connectDB from "../index.js"
import Dog from "../models/Dog.js"
import mongoose from "mongoose"

export default async function readDog(data) {
    await connectDB()
    try {
        const { identifier } = data
        return await Dog.findById(identifier)
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read dog. Invalid data")
    }
}