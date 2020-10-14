import React, { useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"; 
// import UpdateReview from './UpdateReview';


function Review(props) {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async (event) => {
        setDeleted(true);
       
            const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/covid/${props.covid.id}`;
            await axios.delete(airtableURL, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                },
        });
        props.setFetchReviews(!props.fetchReviews);
  
    };


    return (
       <div>
            <div>
                <Link to= "/" >
                    <h3> Home </h3>
                </Link>
            </div>
        
            <div className = "review">
            <h4>{props.covid.fields.name}</h4>
            <h4>{props.covid.fields.zipCode}</h4>
            <h4>{props.covid.fields.symptoms}</h4>
            <button onClick={handleDelete}>{deleted ? "deleted" : "delete"}
            </button>
            
            </div>
        </div> 
    );
}

export default Review;