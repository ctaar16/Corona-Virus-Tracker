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
            <h3>{props.review.fields.name}</h3>
            <h3>{props.review.fields.zipCode}</h3>
            <h3>{props.review.fields.symptoms}</h3>
            <button onClick={handleDelete}>{deleted ? "deleted" : "delete"}</button>
            {/* <UpdateReview review = {props.review}/> */}
                {/* review = {props.review}
                fetchReviews = {props.fetchReviews}
                setFetchReviews = {props.setFetchReviews} */}
        </div>
    );
}

export default Review;