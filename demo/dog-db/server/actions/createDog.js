import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function createDog(dogData) {
    await connectDB()
    try {
        const dog = new Dog(dogData)
        await dog.save()
    } catch (e) {
        console.log(e)
        throw new Error("Unable to create dog. Invalid data")
    }
}