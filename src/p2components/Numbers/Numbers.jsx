import React from "react";


const Squares = (props) => {



    // async componentDidMount = () => {      //does this get placed on components and not app.js?
    //     const response = await Axios({
    //         "method": "GET",
    //         "url": "https://covid-19.dataflowkit.com/v1/world",
    //         "headers": { 
    //               'X-rapidapi-host':  "https://covid-19.dataflowkit.com/v1/world",
    //               'X-rapidapi-key': "7bd3a101f5msh328978bf4333f7fp1d23acjsn1b34a3cb3c34",
    //         },
    //     });
    //       this.setState ({ covid: response.data });
    //       console.log(this.state.covid);

    // };   



    return (
        <div >
             <h2>COVID-19 Data</h2>
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

export default Squares;