import React from "react";
import Axios from "axios";

import {Squares, Graphs, CountrySelector, Inputs} from './components'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        covid: {},
        };
    } 

    async componentDidMount() {
      const response = await Axios.get("https://corsanywhere.herokuapp.com/https://covid-19.dataflowkit.com/v1/world",
         {
            headers: { 
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                'X-rapidapi-host':  "https://covid-19.dataflowkit.com/v1/world",
                'X-rapidapi-key': "7bd3a101f5msh328978bf4333f7fp1d23acjsn1b34a3cb3c34",
                'header1': 'header-value-1'
              },
            }
        );
        this.setState ({ covid: response.data });
        console.log(this.state.covid);
    }

      

    

    render() {
        return(
            <div className = "whatever">
                <h1>something show up</h1>
                <Squares />
                <Graphs />
                <CountrySelector />
                <Inputs />
            </div>
        )
    }
  }


export default App;