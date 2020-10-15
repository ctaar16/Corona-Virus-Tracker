import React, { useEffect, useState } from "react";
import axios from "axios";
import Numbers from "./p2components/Numbers/Numbers";
import Review from "./p2components/Review/Review";
import CreateReview from "./p2components/Review/CreateReview";
import Home from "./p2components/Home";
import { Route } from "react-router-dom";
import Footer from "./p2components/Footer";
import Header from "./p2components/Header";
import Graph from "./p2components/Graphs/Graphs"


function App() {
  const [reviews, setReviews] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);
 
  useEffect(() => {
    const getReviews = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/covid?sort%5B0%5D%5Bfield%5D=name`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data);
      setReviews(response.data.records);
    };
    getReviews();
  }, [fetchReviews]);

  return (
    <div>
      <div className="whatever">
    </div>
        <div>
            <Header/>
            <Route exact path ="/">
              <Home />
            </Route>
            <Route>
              <Graph />
            </Route>
            <Route>
              <Numbers />
            </Route>
        </div>
        <div className="App">
          <Route path = "/CreateReview">
            <h2>Feeling Symptomatic?</h2>
              <CreateReview
                fetchReviews={fetchReviews}
                setFetchReviews={setFetchReviews} />
          </Route>
          <Route path = "/Review" >
              {reviews.map((covid) => (
              <Review
                key={covid.id}
                covid={covid}
                fetchReviews={fetchReviews}
                setFetchReviews={setFetchReviews}
          />
        ))}
          </Route>
            <Footer />
      </div>
    </div>
  );
}
export default App;
