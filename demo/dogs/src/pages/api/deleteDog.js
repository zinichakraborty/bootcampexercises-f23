import deleteDog from "../../../server/mongodb/actions/deleteDog";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const success = await deleteDog(req.query, res)
        if (success) {
            return res.status(200).send("Succesfully deleted dog")
        } else {
            return res.status(500).send("Unable to delete dog")
        }
    }
}