import axios from "axios";
import React, { useState, useEffect } from "react";



function  Numbers (props) {
    const [apiData, setApiData]= useState ([]);



useEffect(() => {
    const popularData = async () => {
        const popularDataEnds = await axios.get(`https://covid-193.p.rapidapi.com/countries?search=usa`
    );
    setApiData(popularDataEnds.data);
};
popularData();
}, []);
console.log(apiData)



    return (
        <div >
             
                <div className = "bigdata">
                    <div className = "infecteddata">
                        <h4>Infected</h4>
                        <h5>Actual Numerical Data to be imported by api</h5>
                        <h5>Actual Date</h5>
                        <h5>Number of active cases</h5>
                    </div>

                    <div className = "recovereddata">
                        <h4>Recovered</h4>
                        <h5>Actual Numerical Data to be imported by api</h5>
                        <h5>Actual Date</h5>
                        <h5>Number of recovered cases</h5>
                    </div>

                    <div className = "deathdata">
                        <h4>Deaths</h4>
                        <h5>Actual Numerical Data to be imported by api</h5>
                        <h5>Actual Date</h5>
                        <h5>Number of deaths</h5>
                    </div>
                </div>
        </div>
        
    )
}

export default Numbers;