import "./styles/stationsNavPanel.css"
import "@fontsource/open-sans";

export default function stationsNavPanel(props) {
    const { stations } = props;
    if (stations[0] !== "All Stations") {
        stations.unshift("All Stations");
    }
    return (
        <div className="stationsNavPanel">
            <div className="panelHeading">
                <p className="panelHeadingContent">Select your starting station</p>
            </div>
            <div className="stationsOptions">
                {stations.map((station) => {
                    return <li><button className="stationsOptionsContent" onClick={() => alert(station)}><span>{station}</span></button></li>
                })}
            </div>
        </div>
    )
}
