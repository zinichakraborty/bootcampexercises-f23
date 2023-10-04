import logo from './logo.svg';
import './App.css';
import Train from './components/Train'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = async (url) => {
  const res = await axios.get(url)
  return res.data
}

function App() {
  const { data, error, isLoading, isValidating } = useSWR("http://localhost:3001/arrivals/gold", fetcher)
  if (isLoading) return <div>Loading</div>
  if (!isValidating) {
    console.log(data)
    return (
      <div className="App">
        {data[0].DESTINATION}
      </div>
    );
  }
}

export default App;
