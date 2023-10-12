import "./styles/trains.css"
import Train from '../components/Train'

export default function Trains(props) {
    const { trains } = props;
    return (
        <div className="Trains">
            {trains.map((train) => {
                return <Train {...train} />;
            })}
        </div>
    )
}