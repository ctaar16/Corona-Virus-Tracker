import React from "react";
import { Link } from "react-router-dom";        //Importing data from dom and react

function Home (props) {                             //setting up the function that will display "homepage" data.
    return (                                        //this div will provide the bird images to the homescreen
        
    <div>
        <div>
            <Link to= "/CreateReview" >
            <button> Feeling Symptomatic? Let Us Know!</button>
            </Link>
        </div>
    </div>
    )
}

export default Home;