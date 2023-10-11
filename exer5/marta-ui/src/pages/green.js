import "./line.css";
import "@fontsource/open-sans";
import trainData from '../server/train-data';
import stationData from "../server/station-data";
import TitleBar from "./components/titleBar"
import Dashboard from './components/dashboard';

export default function GoldLine() {
    const line = "green";
    const redArrivals = trainData.RailArrivals.filter(arrival => { return arrival.LINE === line.toUpperCase() });
    const redStations = stationData[line];
    const redButtons = ["Arriving", "Scheduled", "Eastbound", "Westbound"];
    return (
        <div className="redLine">
            <TitleBar titleLine={line.toUpperCase()} />
            <Dashboard trains={redArrivals} stations={redStations} buttons = {redButtons} />
        </div>
    )
}