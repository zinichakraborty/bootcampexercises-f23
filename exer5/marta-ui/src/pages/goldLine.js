import "./goldLine.css";
import "@fontsource/open-sans";
import trainData from '../data/train-data';
import stationData from "../data/station-data";
import TitleBar from "./components/titleBar"
import Dashboard from './components/dashboard';

export default function GoldLine() {
    const line = "gold";
    const goldArrivals = trainData.RailArrivals.filter(arrival => { return arrival.LINE === line.toUpperCase() });
    const goldStations = stationData[line];
    return (
        <div className="goldLine">
            <TitleBar titleLine={line.toUpperCase()} />
            <Dashboard trains={goldArrivals} stations={goldStations} />
        </div>
    )
}