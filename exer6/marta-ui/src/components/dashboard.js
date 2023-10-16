import "./styles/dashboard.css";
import StationsNavPanel from "./stationsNavPanel";
import FilterButtons from "./filterButtons";
import Trains from "./Trains";

export default function Dashboard(props) {
    const { trains, stations, buttons } = props;
    return (
        <div className="dashboard">
            <StationsNavPanel stations={stations} />
            <div className="dashboard-body">
                <FilterButtons buttons={buttons} className="filterButtons" />
                <Trains trains={trains} />
            </div>
        </div>
    )
}