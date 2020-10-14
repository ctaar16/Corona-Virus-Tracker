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
// console.log(confirmedData);
// console.log(recovery);
// console.log(death);
// console.log(date)


    return (
        
                <div className = "bigdata">
                    <div className = "boxes">
                    <h4>Number of Active Cases</h4>
                        <h5>Infected: {confirmedData} </h5>
                        <h5>Date: {date}</h5>
                    </div>

                    <div className = "boxes">
                        <h4>Number of Recovered Cases</h4>
                        <h5>Recovered: {recovery}</h5>
                        <h5>Date: {date}</h5>
                    </div>

                    <div className = "boxes">
                        <h4>Number of Deaths</h4>
                        <h5>Deaths: {death}</h5>
                        <h5>Date: {date}</h5>
                    </div>
                </div>
        
        
    )
}

export default Numbers;