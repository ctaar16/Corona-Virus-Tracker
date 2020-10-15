import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";  


function CreateReview(props) {
  const [zipCode, setZipCode] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [name, setName] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        //we have to make a field object that holds the title, text, and author.
        const fields = {
            zipCode,
            symptoms,
            name,
        };
        // make POST request to our endpoint
        const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/covid`;
        await axios.post(airtableURL, {fields}, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            },
          } 
        );
        props.setFetchReviews(!props.fetchReviews);


    };

    return (

<div>
  
      <Link to= "/Review" >
      <button> See What Others Posted </button>
      </Link>

        <div>
          <form className = "update-form" onSubmit = {handleSubmit}>  
            <label htmlFor='name'>Name:</label>
              <input
                className = "namebox"
                name='name'
                type="text"
                 placeholder = "Name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <label htmlFor='zipcode'>Zip Code:</label>
              <input
              className = "zipCode"
              name='zipcode'
              type="text"
              placeholder = "Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}/> 
            <label htmlFor='symptoms'>Symptoms:</label>
              <input
                className = "symptoms"
                name='Symptoms'
                type="text"
                placeholder = "Yes / No"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}/>
              <button type='submit'>SUBMIT</button>
          </form>
        </div>
        </div>
    );
}
export default CreateReview;