import axios from "axios";
import React, { useState, useEffect } from "react";


function  Numbers (props) {
    const [confirmedData, setConfirmedData] = useState([])
    const [confDiff, setConfDiff] = useState([])
    const [recovery, setRecovery] = useState([])
    const [recDiff, setRecoDiff] = useState([])
    const [death, setDeath] = useState ([])
    const [date, setDate] = useState([])
    const [fat, setFat] = useState([])

    useEffect(() => {
        const getData = async () => {
          let response = await axios ({
          "method": "GET",
          "url": "https://rapidapi.p.rapidapi.com/reports/total",
          "headers": {
            "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
            "x-rapidapi-key": "7bd3a101f5msh328978bf4333f7fp1d23acjsn1b34a3cb3c34",
            "useQueryString": true
          }
        });
        setConfirmedData(response.data.data.confirmed)
        setConfDiff(response.data.data.confirmed_diff)
        setRecovery(response.data.data.recovered)
        setRecoDiff(response.data.data.recovered_diff)
        setDeath(response.data.data.deaths)
        setDate(response.data.data.last_update)
        setFat(response.data.data.fatality_rate)
        }
        getData();
      }, []);


      function numberWithCommas(population) {
        return population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    } 


    return (
         <div className = "bigdata">
            <div className = "boxes">
                <h3>Number of Confirmed Cases</h3>
                <h4>Infected: {numberWithCommas(confirmedData)} </h4>
                <h4>New Cases: {numberWithCommas(confDiff)} </h4>
                <h5>Last Updated: {date}</h5>
            </div>
            <div className = "boxes">
                <h3>Number of Recovered Cases</h3>
                <h4>Recovered: {numberWithCommas(recovery)}</h4>
                <h4>Newly Recovered: {numberWithCommas(recDiff)}</h4>
                <h5>Last Updated: {date}</h5>
            </div>
            <div className = "boxes">
                <h3>Number of Deaths</h3>
                <h4>Deaths: {numberWithCommas(death)}</h4>
                <h4>Fatality Rate: {fat*100} %</h4>
                <h5>Last Updated: {date}</h5>
            </div>
         </div> 
    )
}

export default Numbers;