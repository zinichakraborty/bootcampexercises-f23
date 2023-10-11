import "./styles/filterButtons.css";
import "@fontsource/open-sans";


export default function filterButtons(props) {
    const { buttons } = props;
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