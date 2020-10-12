import Axios from 'axios';
import React, { useState } from 'react';


function CreateReview(props) {
  const [zipCode, setZipCode] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [name, setName] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        //we have to make a field object taht holds the title, text, and author.
     
        const fields = {
            zipCode,
            symptoms,
            name,
        };
        // make POST request to our endpoint
        const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/COVID`;
        await Axios.post(airtableURL, {fields}, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            },
          } 
        );
        props.setFetchReviews(!props.fetchReviews);
         //make anothe GET request???
         //clear out our inputs so we can type something new in
        setZipCode("");
        setSymptoms("");
        setName("");
    };

    return (
        <div>
      <form className = "update-form" onSubmit = {handleSubmit}>  
      <label htmlFor='name'>Name:</label>
      <input
        name='name'
        type="text"
        placeholder = "name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <label htmlFor='zipcode'>Zip Code:</label>
      <input
        name='zipcode'
        type="text"
        placeholder = "zipcode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}/> 
      <label htmlFor='symptoms'>Symptoms:</label>
      <input
        name='Symptoms'
        type="text"
        placeholder = "Symptoms"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}/>
      <button type='submit'>SUBMIT</button>
    </form>
    </div>

    );
}
export default CreateReview;