import "./line.css";
import "@fontsource/open-sans";
import trainData from '../server/train-data';
import stationData from "../server/station-data";
import TitleBar from "../components/titleBar"
import Dashboard from '../components/dashboard';

export default function TrainLine(props) {
    const { line, buttons } = props;
    const arrivals = trainData.RailArrivals.filter(arrival => { return arrival.LINE === line.toUpperCase() });
    const stations = stationData[line];
    return (
        <div className="trainLine">
            <TitleBar titleLine={line.toUpperCase()} />
            <Dashboard trains={arrivals} stations={stations} buttons = {buttons} />
        </div>
    )
}