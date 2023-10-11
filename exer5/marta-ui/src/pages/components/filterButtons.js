import "./styles/filterButtons.css";
import "@fontsource/open-sans";


export default function filterButtons() {
    const buttons = ["Arriving", "Scheduled", "Northbound", "Southbound"];
    return (
        <div className="filterButtons">
            {
                buttons.map((button) => {
                    return <li><button className="button" onClick={() => alert(button)}>{button}</button></li>
                })
            }
        </div>
    )
}