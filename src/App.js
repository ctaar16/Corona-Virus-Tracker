import React, { useEffect, useState } from "react";
import axios from "axios";
import Numbers from "./p2components/Numbers/Numbers";
import Graphs from "./p2components/Graphs/Graphs";
import CountrySelector from "./p2components/countrySelector/countrySelector";
import Review from "./p2components/Review/Review";
import CreateReview from "./p2components/Review/CreateReview";
import UpdateReview from "./p2components/Review/UpdateReview";

// async componentDidMount() {
//   const response = await Axios.get("https://corsanywhere.herokuapp.com/https://covid-19.dataflowkit.com/v1/world",
//      {
//         headers: {
//             'cache-control': 'no-cache',
//             'Content-Type': 'application/json',
//             'X-rapidapi-host':  "https://covid-19.dataflowkit.com/v1/world",
//             'X-rapidapi-key': "7bd3a101f5msh328978bf4333f7fp1d23acjsn1b34a3cb3c34",
//             'header1': 'header-value-1'
//           },
//         }
//     );
//     this.setState ({ covid: response.data });
//     console.log(this.state.covid);
// }

// async componentDidMount() => {      //does this get placed on components and not app.js?
//     const response = await Axios({
//         "method": "GET",
//         "url": "https://covid-19.dataflowkit.com/v1/world",
//         "headers": {
//               'X-rapidapi-host':  "https://covid-19.dataflowkit.com/v1/world",
//               'X-rapidapi-key': "7bd3a101f5msh328978bf4333f7fp1d23acjsn1b34a3cb3c34",
//         },
//     });
//       this.setState ({ covid: response.data });
//       console.log(this.state.covid);

// }

function App() {
  
  const [reviews, setReviews] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/covid`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data);
      setReviews(response.data.records);
    };
    getReviews();
  }, []);

  return (
    <div>
      <div className="whatever">
        <h1 className="header">COVID-Tracker</h1>
        <CountrySelector />
        <Numbers />
        <Graphs />
      </div>

      <div className="App">
        <h1>Feeling Symptomatic?</h1>
        <CreateReview
          fetchReviews={fetchReviews}
          setFetchReviews={setFetchReviews}
        />
        {reviews.map((covid) => (
          //review component has a prop called review with a value
          <Review
            key={covid.id}
            review={covid}
            fetchReviews={fetchReviews}
            setFetchReviews={setFetchReviews}
          />
        ))}
        <h6>Created by: Chris Haar</h6>
      </div>
    </div>
  );
}
export default App;
