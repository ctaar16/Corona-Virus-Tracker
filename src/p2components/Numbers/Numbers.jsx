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
        <div>
             <h1>Numbers</h1>
                <div>
                    <div className = "infecteddata">
                        <h4>Infected</h4>
                        <h6>Actual Numerical Data to be imported by api</h6>
                        <h6>Actual Date</h6>
                        <h6>Number of active cases</h6>
                    </div>

                    <div className = "Recovereddata">
                        <h5>Infected</h5>
                        <h6>Actual Numerical Data to be imported by api</h6>
                        <h6>Actual Date</h6>
                        <h6>Number of recovered cases</h6>
                    </div>

                    <div className = "Deathdata">
                        <h5>Infected</h5>
                        <h6>Actual Numerical Data to be imported by api</h6>
                        <h6>Actual Date</h6>
                        <h6>Number of deaths</h6>
                    </div>
                </div>
        </div>
        
    )
}

export default Squares;