import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FeaturedWines.css';

const logo = require('../img/bottle.png');

const FeaturedWines = () => {
     const [wines, setWines] = useState<any>([]);
     useEffect(() => {
        fetchWines();
    }, []);
        const fetchWines = () => {
            axios
              .get('http://localhost:3000/wines')
              .then((res) => {
                setWines(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
}
    //     const fetchWines = async () => {
    //          const wines = await fetch('http://localhost:3000/wines')
    //          .then(res => res.json())
    //      setWines(wines);
    //      console.log(wines)
    //  }
    //  fetchWines();
  return (
    <div>
    <h1>Featured Wines</h1>
    <div className='item-container'>
    {/* add interface to type Any, see api model */}
      {wines.map((wine: any) => (
        <div className='card' key={wine._id}>
          <img src={logo} alt='' />
          <h3>{wine.title}</h3>
          <p>{wine.description}</p>
          <Link to={`/wine/${wine._id}`}>Show me</Link>
        </div>
      ))}
    </div>
  </div>
);
};

export default FeaturedWines;