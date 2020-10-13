import React, { useState } from 'react';
import axios from "axios"
import UpdateReview from './UpdateReview';


function Review(props) {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async () => {
        setDeleted(true);
        setTimeout(async () => {
            const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/covid/${props.covid.id}`;
            await axios.delete(airtableURL, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                },
        });
        props.setFetchReviews(!props.fetchReview);
        setDeleted(false);
    }, 1000);
    };


    return (
        <div className = "review">
            <h4>{props.covid.fields.name}</h4>
            <h4>{props.covid.fields.zipCode}</h4>
            <h4>{props.covid.fields.symptoms}</h4>
            <button onClick={handleDelete}>{deleted ? "deleted" : "delete"}
            
            </button>
            
            {/* <UpdateReview review = {props.review}/> 
                {review = {props.review}}
                fetchReviews = {props.fetchReviews}
                setFetchReviews = {props.setFetchReviews} */}
        </div>
    );
}

export default Review;