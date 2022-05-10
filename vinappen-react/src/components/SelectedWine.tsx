import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SelectedWine = () => {
    const [wines, setWines] = useState<any>({});
    const { id } = useParams();
    useEffect(() => {
        const fetchWines = async () => {
            const wines = await fetch(`http://localhost:3000/wines/${id}`)
            .then(res => res.json())
        setWines(wines);
        console.log(wines)
    }
    fetchWines();
    }, [id]);
    return (
        <div className="selected-wine" >
          <Link to="/">Back to start</Link>
            <h1>{wines.title}</h1>
                <div>
                    <p>
                        {wines.description}
                    </p>
                <img src={wines.imageUrl} alt={wines.title} />
                </div>

            <div>
                {/* <h2>Ingredienser</h2>
                <ul>
                    {wines.ingredients && wines.ingredients.map((ingredient:any) => (
                        <li key={ingredient.ingredient}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                    ))}
                </ul> */}
                {/* <h2>Winemaking process</h2>
                <ol>
                    {wines.process && wines.process.map((step:any) => (
                        <li key={step.process}>{step.process}</li>
                    ))}
                </ol> */}
            </div>
        </div>
    )
}

export default SelectedWine;