import React from "react";
import { Link } from "react-router-dom";        

function Home (props) {                             
    return (                                        
    <div>
        <div>
            <Link to= "/CreateReview" >
            <button className = "textTransformX"> Feeling Symptomatic? Let Us Know!</button>
            </Link>
        </div>
    </div>
    )
}

export default Home;