import "./styles/titleBar.css";
import "@fontsource/bebas-neue";

export default function titleBar(props) {
    const { titleLine } = props;
    return (
        <div className="titleBar">
            <p>{titleLine}</p>
        </div>
    )
}