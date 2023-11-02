import deleteDog from "../../../server/actions/deleteDog.js";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const success = await deleteDog(req.body)
        if (success) {
            return res.status(200).send("Successfully deleted dog")
        } else {
            return res.status(500).send("Unable to delete dog")
        }
    }
}