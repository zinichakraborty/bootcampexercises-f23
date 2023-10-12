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
                    <p3 className={(LINE === 'GOLD') ? "gold" :  (LINE === 'RED') ? "red" : (LINE === 'GREEN') ? "green" : "blue"}>{LINE}</p3>
                    <p4 className={(DELAY === 'T0S') ? "greentime" : "redtime" }>{time}</p4>
                </div>
            </div>
            <p2>{WAITING_TIME}</p2>
        </div>
    )
}