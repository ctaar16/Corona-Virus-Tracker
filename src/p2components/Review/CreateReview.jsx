import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";  


function CreateReview(props) {
  const [zipCode, setZipCode] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [name, setName] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = {
            zipCode,
            symptoms,
            name,
        };
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
      <button className = "textTransformX"> See What Others Posted </button>
      </Link>
        <div>
          <form className = "update-form" onSubmit = {handleSubmit}>  
            <label htmlFor='name'></label>
              <input
                className = "namebox"
                name='name'
                type="text"
                 placeholder = "Name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <label htmlFor='zipcode'></label>
              <input
              className = "zipCode"
              name='zipcode'
              type="text"
              placeholder = "Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}/> 
            <label htmlFor='symptoms'></label>
              <input
                
                className = "symptoms"
                name='Symptoms'
                type="text"
                placeholder = "List Symptoms Here"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}/>
              <button className = "textTransformX" type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    );
}
export default CreateReview;