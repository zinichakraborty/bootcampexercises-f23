import logo from './logo.svg';
import './App.css';
import data from './train-data'

function App() {
  return (
    <div className="App">
      <p>{data.RailArrivals[0].DESTINATION}</p>
    </div>
  );
}

export default App;
