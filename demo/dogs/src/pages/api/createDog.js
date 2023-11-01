import createDog from "../../../server/mongodb/actions/createDog";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const success = await createDog(req.body, res)
        if (success) {
            return res.status(200).send("Succesfully saved dog")
        } else {
            return res.status(500).send("Unable to save dog")
        }
    }
}