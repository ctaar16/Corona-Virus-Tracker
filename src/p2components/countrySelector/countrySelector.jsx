import React, {useState, useEffect }from "react";


const countrySelector = () => {
    const [fetchCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchCountries
        }
    })  



    return (
        <div>
            <h1>Country Selector</h1>
        </div>
        
    )
}

export default countrySelector;