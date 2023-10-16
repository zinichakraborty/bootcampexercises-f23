import "./line.css";
import "@fontsource/open-sans";
import trainData from '../server/train-data';
import stationData from "../server/station-data";
import TitleBar from "../components/titleBar"
import Dashboard from '../components/dashboard';
import useSWR from 'swr'
import axios from 'axios'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function TrainLine(props) {
    const { data, error, isLoading, isValidating } = useSWR("http://13.59.196.129:3001/arrivals/gold", fetcher)
    const { line, buttons } = props;
    const arrivals = trainData.RailArrivals.filter(arrival => { return arrival.LINE === line.toUpperCase() });
    const stations = stationData[line];
    if (isLoading) return <div>Loading</div>
    if (isValidating) return <div>Validating</div>
    return (
        <div className="trainLine">
            <TitleBar titleLine={line.toUpperCase()} />
            <Dashboard trains={arrivals} stations={stations} buttons = {buttons} />
        </div>
    )
}