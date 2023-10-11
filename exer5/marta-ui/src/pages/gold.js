import "./line.css";
import "@fontsource/open-sans";
import trainData from '../server/train-data';
import stationData from "../server/station-data";
import TitleBar from "./components/titleBar"
import Dashboard from './components/dashboard';

export default function GoldLine() {
    const line = "gold";
    const goldArrivals = trainData.RailArrivals.filter(arrival => { return arrival.LINE === line.toUpperCase() });
    const goldStations = stationData[line];
    const goldButtons = ["Arriving", "Scheduled", "Northbound", "Southbound"];
    return (
        <div className="goldLine">
            <TitleBar titleLine={line.toUpperCase()} />
            <Dashboard trains={goldArrivals} stations={goldStations} buttons={goldButtons} />
        </div>
    )
}