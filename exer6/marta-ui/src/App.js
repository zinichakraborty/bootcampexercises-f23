import './App.css';
import TrainLine from './pages/trainLine'
import React, { useState } from 'react';

function App() {
  const [line, setLine] = useState("gold");
  const [buttons, setButtons] = useState(["Arriving", "Scheduled", "Northbound", "Southbound"]);
  return (
    <div className="App">
      <button className="gold-button" onClick={() => {setLine("gold"); setButtons(["Arriving", "Scheduled", "Northbound", "Southbound"])}}>Gold</button>
      <button className="red-button" onClick={() => {setLine("red"); setButtons(["Arriving", "Scheduled", "Northbound", "Southbound"])}}>Red</button>
      <button className="blue-button" onClick={() => {setLine("blue"); setButtons(["Arriving", "Scheduled", "Eastbound", "Westbound"])}}>Blue</button>
      <button className="green-button" onClick={() => {setLine("green"); setButtons(["Arriving", "Scheduled", "Eastbound", "Westbound"])}}>Green</button>
      <TrainLine line={line} buttons={buttons} />
    </div>
  );
}

export default App;
