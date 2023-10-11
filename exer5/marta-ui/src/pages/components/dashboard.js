import "./styles/dashboard.css";
import StationsNavPanel from "./stationsNavPanel";
import FilterButtons from "./filterButtons";

export default function Dashboard(props) {
    const { trains, stations } = props;
    return (
        <div className="dashboard">
            <StationsNavPanel stations={stations} />
            <div className="dashboard-body">
                <FilterButtons className="filterButtons" />
            </div>
        </div>
    )
}