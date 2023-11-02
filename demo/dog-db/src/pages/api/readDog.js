import readDog from "../../../server/actions/readDog.js";

export default async function handler(req, res) {
    if (req.method == 'GET') {
        const result = await readDog(req.query)
        if (!result) {
            return res.status(500).send("Unable to read dog")
        }
        return res.status(200).json({ dog: result })
    }
}