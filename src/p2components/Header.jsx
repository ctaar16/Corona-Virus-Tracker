import React from "react";
import { Link } from "react-router-dom";        //Importing data from dom and react

function Header (props) {                             //setting up the function that will display "homepage" data.
    return (                                        //this div will provide the bird images to the homescreen
        <div>
            <Link to= "/Reviews" >
            <h1> Welcome to Chris's Covid Tracker!</h1>
            </Link>
        </div>
    )
}

export default Header;