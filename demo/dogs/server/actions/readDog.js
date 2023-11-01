import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function createDog(identifier, res) {
    try {
        return await Dog.find(identifier)
    } catch(e) {
        console.log(e)
        return false
    }
}