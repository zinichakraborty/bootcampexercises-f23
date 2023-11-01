import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function createDog(dogData, res) {
    await connectDB()
    try {
        const dog = new Dog(dogData)
        await dog.save()
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}