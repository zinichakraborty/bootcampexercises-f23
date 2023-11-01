import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function createDog(identifier, res) {
    try {
        await Dog.deleteOne(identifier)
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}