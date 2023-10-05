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
    console.log(`Api running on port ${PORT}/`)
});

server.get('/', (req, res) => {
    res.json('API is running!');
})

server.get('/arrivals/:line', async (req, res) => {
    let arrival = await getTrainByLine(req.params.line);
    res.json(arrival);
})

server.get('/stations/:line', (req, res) => {
    res.json(getStationsByLine(req.params.line));
})

//=== UTIL ===

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

function getStationsByLine(line) {
    const stationsByLine = {
        red: ["North Springs", "Sandy Springs", "Dunwoody", "Medical Center", "Buckhead", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"],
        gold: ["Doraville", "Chamblee", "Brookhaven", "Lenox", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"],
        blue: ["Hamilton E. Holmes", "West Lake", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood", "East Lake", "Decatur", "Avondale", "Kensington", "Indian Creek"],
        green: ["Bankhead", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood"]

    }
    const output = line.toLowerCase() in stationsByLine ? stationsByLine[line.toLowerCase()] : [];
    return output;
}