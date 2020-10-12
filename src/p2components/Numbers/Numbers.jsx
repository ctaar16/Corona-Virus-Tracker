import React from "react";


const Squares = (props) => {
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