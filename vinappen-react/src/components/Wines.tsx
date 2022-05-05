import { useState, useEffect } from "react";
import './Wines.css'
// import logo from './src/img/bottle.png'

const logo = require('../img/bottle.png');

const WineList = () => {
    const [wines, setWines] = useState<any>([]);
    useEffect(() => {
        const fetchWines = async () => {
            const wines = await fetch('http://localhost:3000/wines')
            .then(res => res.json())
        setWines(wines);
        console.log(wines)
    }
    fetchWines();
    }, [])
//CREATE WINE CARD COMPONENT TO LIST <Wine/> HERE!!!1
    return (
        <div className="wine-list">
            <div>
                <img src={logo} className="wine-logo" alt="Wine bottle placeholder"></img>
                <h2>{wines[1].title}</h2>
                <p>{wines[1].description}</p>
            </div>
            <div>
                <img src={logo} className="wine-logo" alt="Wine bottle placeholder"></img>
                <h2>{wines[0].title}</h2>
                <p>{wines[0].description}</p>
            </div>
        {/* <h1>{wines[0].title}</h1>
        <p>{wines[0].description}</p> */}
        </div>
        // <ul>
        //     {wines.map((wine: any) => <li key={wine._id}>{wine.title + ' ' + wine.description}</li>)}
        //     {wines.map((wine: any) => <li key={wine._id}>{wine.imageUrl + ' ' + wine.storeInYears}</li>)}
        //     {wines.map((wine: any) => <li key={wine._id}>{wine.ratings + ' ' + wine.category}</li>)}
        //     {/* Put forEach on process to make li? */}
        //     {wines.map((wine: any) => <li key={wine._id}>{wine.grapes[0].grapes + ' ' + wine.process}</li>)}
        // </ul>
    )
}

export default WineList;