import "./styles/dashboard.css";
import StationsNavPanel from "./stationsNavPanel";

export default function Dashboard(props) {
    const { trains, stations } = props;
    return (
        <div className="dashboard">
            <StationsNavPanel stations={stations} />
            <h1>Test</h1>
        </div>
    )
}