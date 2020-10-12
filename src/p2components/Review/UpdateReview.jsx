// import Axios from 'axios';
// import React, { useState } from 'react';


// function UpdateReview(props) {
//     const [zipCode, setZipCode] = useState(props.covid.fields.zipCode);
//     const [symptoms, setSymptoms] = useState(props.covid.fields.symptoms);
//     const [name, setName] = useState(props.covid.fields.name);


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         //we have to make a field object that holds the zipcode, symptoms, and name.
       
//         const fields = {
//             zipCode,
//             symptoms,
//             name,
//         };
//         // make POST request to our endpoint
//         const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/covid/${props.covid.id}`;
//         await Axios.post(airtableURL, {fields}, {
//             headers: {
//                 Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
//             },
//           } 
//         );
//         props.setFetchReviews(!props.fetchReviews);
       
//     };
    
//     return (
//         <div>
//       <form className = "update-form" onSubmit = {handleSubmit}>
//       <label htmlFor='namer'>Name:</label>
//         <input
//         name='name'
//         type="text"
//         placeholder = "name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}/>

//       <label htmlFor='zipcode'>Zip Code:</label>  
//         <input
//         name='zipcode'
//         type="text"
//         placeholder = "zipcode"
//         value={zipCode}
//         onChange={(e) => setZipCode(e.target.value)}/>
      
//       <label htmlFor='Symptoms'>Symptoms:</label>
//         <input
//         name='Symptoms'
//         type="text"
//         placeholder = "Symptoms"
//         value={symptoms}
//         onChange={(e) => setSymptoms(e.target.value)}/>
      
//       <button type='submit'>SUBMIT</button>

//       <button type='submit'>DELETE</button>
//     </form>
//     </div>

//     );
// }

// export default UpdateReview;