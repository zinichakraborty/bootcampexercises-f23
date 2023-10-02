import axios from "axios";
import https from "https";

export default async function getTrainByLine(line) {
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

//Testing
console.log(await getTrainByLine("gold"));