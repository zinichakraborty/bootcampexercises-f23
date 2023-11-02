import createDog from "../../../server/actions/createDog.js";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const success = await createDog(req.body)
        if (success) {
            return res.status(200).send("Successfully saved dog")
        } else {
            return res.status(500).send("Unable to save dog")
        }
    }
}