import React from "react";
import {Link} from "react-router-dom";


function Header (props) {                             //setting up the function that will display "homepage" data.
    return (                                        //this div will provide the bird images to the homescreen
        <div>
            <h1> COVID-Tracker</h1>
            <Link to= "/" >
                    <button className = "homeButton"> Home </button>
                </Link>

                
        </div>
    )
}

export default Header;