import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function deleteDog(data) {
    await connectDB()
    try {
        const { identifier } = data
        await Dog.findByIdAndDelete(identifier)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}