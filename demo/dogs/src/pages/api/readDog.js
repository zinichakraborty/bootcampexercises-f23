import readDog from "../../../server/mongodb/actions/readDog";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const result = await readDog(req.query, res)
        if (!result) {
            return res.status(500).send("Unable to read dog")
        }
        return result
    }
}