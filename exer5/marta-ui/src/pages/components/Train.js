import "./styles/train.css"

export default function Train(props) {
    const {DESTINATION, STATION, WAITING_TIME,  DELAY} = props;
    return (
        <div className="Train">
            <p>{DESTINATION}, {STATION}, {WAITING_TIME}, {DELAY}</p>
        </div>
    )
}