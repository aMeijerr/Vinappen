import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import WineRating from './WineRating';
import NavBar from './NavBar';
import '../styles/SelectedWine.css';

const SelectedWine = () => {
    const [wine, setWine] = useState<any>({ ratings: [] });
    const { id } = useParams();
    useEffect(() => {
        const fetchWine = async () => {
            const wine = await fetch(`${process.env.REACT_APP_API_BASE_URL}/wines/${id}`)
            .then(res => res.json())
            setWine(wine);
    }
    fetchWine();
    }, [id]); 

const CountryFlag: any = {
    Australien: "π¦πΊ",
    Frankrike: "π«π·",
    "Nya Zeeland": "π³πΏ",
    Spanien: "πͺπΈ",
    Tyskland: "π©πͺ",
    Ungern: "π­πΊ",
    USA: "πΊπΈ",
    Γsterrike: "π¦πΉ"
}

const avgSum = wine.ratings.reduce((a: number, b: number) => a + b, 0) / wine.ratings.length;

console.log(wine.ratings)

    return (
        <div className="selected-wine">
            <div className="navbar-selected-wine">
            <NavBar/>
            </div>
          <Link to="/" className="return-link"><h5>Back to winelist</h5></Link>
                <div className="wine-title-header">
                    <h1>{wine.wineMaker && wine.wineMaker}</h1>
                    <h3>{wine.title}, {wine.vintage}</h3>
                </div>
                    <div className="bottle-description">
                        <img src={process.env.REACT_APP_API_BASE_URL + wine.imageUrl} alt={wine.title} />
                        <p>{wine.description}</p>
                    </div>

                <div className="wine-info-price">
                    <p>{wine.category && CountryFlag[wine.category[0]]} {wine.category && wine.category[0]} | {wine.alcohol}% | #{wine.artNr}</p>
                    <h2>{wine.price}:-</h2>
                </div>
                <div className="wine-rating">
                <WineRating wineId={wine._id}/>
                <p>Rating: {avgSum.toFixed()}%</p>
                </div>

                <div className="winemaking-description">
                    <div>
            <           h4>Vinmakning / SkΓΆrd</h4>
                        <ol>
                            {wine.process && wine.process.map((step:any) => (
                            <li key={step.process}>{step}</li>))}
                        </ol>
                    </div>
                    <div>
                        <h4>Druvkomposition</h4>
                        <ul>
                            {wine.grapes && wine.grapes.map((grapes:any) => (
                            <li key={grapes.grape}>{grapes.percentAmount}% {grapes.grape}</li>))}
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default SelectedWine;