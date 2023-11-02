import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function updateDog(data) {
    await connectDB()
    try {
        const { identifier, newDogData } = data
        await Dog.findByIdAndUpdate(identifier, newDogData)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}