import "./styles/train.css"
import m from './styles/m.png'

export default function Train(props) {
    const {DESTINATION, LINE, STATION, WAITING_TIME,  DELAY} = props;
    const time = (DELAY === 'T0S') ? "On Time" : "Delayed";
    return (
        <div className="Train">
            <img src={m} />
            <div className="middle">
                <p1>{STATION} to {DESTINATION}</p1>
                <div className="bottom-middle">
                    <p3>{LINE}</p3>
                    <p4>{WAITING_TIME}</p4>
                </div>
            </div>
             <p2>{time}</p2>
        </div>
    )
}