import axios from "axios";
import React, { useState, useEffect } from "react";


function  Numbers (props) {
    const [confirmedData, setConfirmedData] = useState([])
    const [recovery, setRecovery] = useState([])
    const [death, setDeath] = useState ([])
    const [date, setDate] = useState([])

    

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
        setRecovery(response.data.data.recovered)
        setDeath(response.data.data.deaths)
        setDate(response.data.data.date)
        }
        getData();
      }, []);



    return (
        
                <div className = "bigdata">
                    <div className = "boxes">
                    <h3>Number of Confirmed Cases</h3>
                        <h4>Infected: {confirmedData} </h4>
                        <h5>Last Updated: {date}</h5>
                    </div>

                    <div className = "boxes">
                        <h3>Number of Recovered Cases</h3>
                        <h4>Recovered: {recovery}</h4>
                        <h5>Last Updated: {date}</h5>
                    </div>

                    <div className = "boxes">
                        <h3>Number of Deaths</h3>
                        <h4>Deaths: {death}</h4>
                        <h5>Last Updated: {date}</h5>
                    </div>
                </div>
        
        
    )
}

export default Numbers;