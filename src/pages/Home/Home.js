import React, { useState, useEffect} from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
function Home(props) {
  const [countries, setCountries] = useState([])
  useEffect( ()=>
  {
    axios.get("https://restcountries.com/v2/all?fields=name,region,flag")
        .then((res)=>{
          setCountries(res.data)
        })  
  }, )
  return (

    <div className="contries-cards">  
    {
      countries.map(country =>
        <div className="card mb-3" style={{minWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={country.flag} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">{country.region}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    </div>
  );
}
export default Home;
