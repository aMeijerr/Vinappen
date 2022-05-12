import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SelectedWine.css';

const SelectedWine = () => {
    const [wines, setWines] = useState<any>({});
    const { id } = useParams();
    useEffect(() => {
        const fetchWines = async () => {
            const wines = await fetch(`http://localhost:3000/wines/${id}`)
            .then(res => res.json())
            setWines(wines);
    }
    fetchWines();
    }, [id]); 

const CountryFlag: any = {
    Australien: "🇦🇺",
    Frankrike: "🇫🇷",
    "Nya Zeeland": "🇳🇿",
    Spanien: "🇪🇸",
    Tyskland: "🇩🇪",
    Ungern: "🇭🇺",
    USA: "🇺🇸",
    Österrike: "🇦🇹"
}

    return (
        <div className="selected-wine">
          <Link to="/">Back to start</Link>
                <div className="wine-title-header">
                    <h1>{wines.wineMaker}</h1>
                    <h3>{wines.title}, {wines.vintage}</h3>
                    <p>{wines.category && CountryFlag[wines.category[0]]} {wines.category && wines.category[0]} - {wines.alcohol}% - #{wines.artNr}</p>
                </div>
                    <div className="bottle-description">
                        <img src={wines.imageUrl} alt={wines.title} />
                        {/* <img src="http://localhost:3000/images/deepdown.png" alt={wines.imgUrl}/> */}
                        {/* <img src={require('http://localhost:3000/images/deepdown.png')} alt={wines.title} /> */}
                        <p>{wines.description}</p>
                        <h2>{wines.price}:-</h2>
                    </div>

            <div className="wine-info">
                <div>
            <h4>Vinmakning / Skörd</h4>
                <ol>
                    {wines.process && wines.process.map((step:any) => (
                        <li key={step.process}>{step}</li>
                    ))}
                </ol>
                </div>
                <div>
                <h4>Druvkomposition</h4>
                <ul>
                    {wines.grapes && wines.grapes.map((grapes:any) => (
                        <li key={grapes.grape}>{grapes.percentAmount}% {grapes.grape}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default SelectedWine;