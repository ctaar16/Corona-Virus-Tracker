import React from "react";
import {Link} from "react-router-dom";


function Header (props) {                          
    return (                                        
        <div>
            <div>
                <h1> COVID-Tracker</h1>
                    <Link to= "/" >
                        <button className = "textTransformX"> Home </button>
                    </Link> 
            </div>
            
                
        </div>
    )
}

export default Header;