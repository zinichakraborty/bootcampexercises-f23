import './App.css';
import TrainLine from './pages/trainLine'

function App() {
  return (
    <div className="App">
      <TrainLine line={"gold"} buttons={["Arriving", "Scheduled", "Northbound", "Southbound"]} />
      <TrainLine line={"red"} buttons={["Arriving", "Scheduled", "Northbound", "Southbound"]} />
      <TrainLine line={"blue"} buttons={["Arriving", "Scheduled", "Eastbound", "Westbound"]} />
      <TrainLine line={"green"} buttons={["Arriving", "Scheduled", "Eastbound", "Westbound"]} />
    </div>
  );
}

export default App;
