import React, { useState } from 'react';
import axios from "axios"
import UpdateReview from './UpdateReview';


function Review(props) {
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async () => {
        setDeleted(true);
        setTimeout(async () => {
            const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/COVID/${props.COVID.id}`;
            await axios.delete(airtableURL, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                },
        });
        props.setFetchReviews(!props.fetchReview);
        setDeleted(false);
    }, 2000);
    };


    return (
        <div className = "review">
            <h3>{props.covid.fields.zipCode}</h3>
            <h4>{props.covid.fields.symptoms}</h4>
            <h5>{props.covid.fields.name}</h5>
            <button onClick={handleDelete}>{deleted ? "YEETED" : "YEET"}</button>
            <UpdateReview review = {props.covid}/>
                review = {props.review}
                fetchReviews = {props.fetchReviews}
                setFetchReviews = {props.setFetchReviews}
        </div>
    );
}

export default Review;