import updateDog from "../../../server/actions/updateDog.js";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const success = await updateDog(req.body)
        if (success) {
            return res.status(200).send("Successfully updated dog")
        } else {
            return res.status(500).send("Unable to update dog")
        }
    }
}