import express from "express";
import axios from "axios";
import https from "https";
import cors from "cors"

const server = express();
const PORT = 3001;

// Enable CORS
server.use(cors())

server.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server running on http://localhost:${PORT}/`)
});

server.get('/arrivals/gold', async (req, res) => {
    let arrival = await getTrainByLine("gold");
    res.json(arrival);
})

async function getTrainByLine(line) {
    let requestSettings = {
        method: "get",
        url: "https://developerservices.itsmarta.com:18096/railrealtimearrivals?apiKey=aa09b111-e99b-4a7c-83f7-8cb6ce8857f7",
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    };
    let res = await axios(requestSettings);
    return res.data.RailArrivals.filter(arrival => { return arrival.LINE == line.toUpperCase() });
}