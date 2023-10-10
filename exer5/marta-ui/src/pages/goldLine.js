import "./goldLine.css"
import trainData from '../data/train-data';
import stationData from "../data/station-data";
import TitleBar from "./components/titleBar"
import Dashboard from './components/dashboard';

export default function GoldLine() {
    return (
        <div className="goldLine">
            <TitleBar titleLine="GOLD" />
            <Dashboard trains={trainData} stations={stationData} />
        </div>
    )
}