import React from "react";
import Axios from "axios";
import Numbers from "./p2components/Numbers/Numbers";
import Graphs from "./p2components/Graphs/Graphs";
import CountrySelector from "./p2components/countrySelector/countrySelector";
import Review from "./p2components/Review/Review";



// useEffect and useState

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//         covid: {},
//         };
    // } 

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



    // async componentDidMount() {
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

    
    function App () {
        const [reviews, setReviews] = useState ([]);
        const [fetchReviews, setFetchReviews] = usetState (false);

        useEffect (() => {
            const getReviews = async () => {
                const airtable = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/reviews`;
                const response = await Axios. get(airtableURL, {
                    headers: {
                        Authorization: `Beare ${process.env.REACT_APP_AIRTABLE_KEY}`,
                    },
                });
                setReviews(response.data.records);
            };
            getReviews();
        }, []);
    


        return (
            <div>
                <div className = "whatever">
                    <h1 className = "header">COVID-Tracker</h1>
                    <Numbers />
                    <Graphs />
                    <CountrySelector /> 
                 </div>

                 <div className="App">
                     <h1>Feeling Symptomatic?</h1>
                    {reviews.map((review) => (
                //review component has a prop called review with a value
                    <Review review ={review}
                    fetchReviews = {fetchReviews}
                    setFetchReviews = {setFetchReviews}
                />
              ))}
                  <CreateReview 
                   fetchReviews ={fetchReviews}
                   setFetchReviews ={setFetchReviews} 
                />
              <h6>Created by: Chris Haar</h6>
            </div>
         </div>
          );
        }
        export default App;


