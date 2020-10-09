import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';

export {default as Squares} from './Squares/Squares';
export {default as Graphs} from './Graphs/Graphs';
export {default as CountrySelector} from './countrySelector/countrySelector';
export {default as Inputs} from './Inputs/Inputs';


ReactDOM.render(
    
        <App />
  
    ,document.getElementById('root')
  );
