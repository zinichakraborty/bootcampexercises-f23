import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function createDog(data, res) {
    try {
        const { identifier, newDogData } = data
        await Dog.updateOne(identifier, newDogData)
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}