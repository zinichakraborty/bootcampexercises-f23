import updateDog from "../../../server/mongodb/actions/updateDog";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const success = await updateDog(req.body, res)
        if (success) {
            return res.status(200).send("Succesfully updated dog")
        } else {
            return res.status(500).send("Unable to update dog")
        }
    }
}