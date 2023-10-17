import "./line.css";
import "@fontsource/open-sans";
import trainData from '../server/train-data';
import stationData from "../server/station-data";
import TitleBar from "../components/titleBar"
import Dashboard from '../components/dashboard';
import useSWR from 'swr'
import axios from 'axios'
import React, { useState, useEffect } from 'react';

// const fetcher = async (url) => {
//     const res = await axios.get(url)
//     return res.data
// }

export default function TrainLine(props) {
    //const { data, error, isLoading, isValidating } = useSWR("http://13.59.196.129:3001/arrivals/gold", fetcher)
    const { line, buttons } = props;
    //const arrivals = trainData.RailArrivals.filter(arrival => { return arrival.LINE === line.toUpperCase() });
    const stations = stationData[line];
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        fetch("http://13.59.196.129:3001/arrivals/gold")
        .then(response => response.json())
        .then(data => setData(data))
        .then(setLoading(false))
      },[])
    if (loading) return <div>Loading</div>
    return (
        <div className="trainLine">
            <TitleBar titleLine={line.toUpperCase()} />
            <Dashboard trains={data} stations={stations} buttons = {buttons} />
        </div>
    )
}