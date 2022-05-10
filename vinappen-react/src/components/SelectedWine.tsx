import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import './SelectedWine.css';

let imgUrl = ""

const SelectedWine = () => {
    const [wines, setWines] = useState<any>({});
    const { id } = useParams();
    useEffect(() => {
        const fetchWines = async () => {
            const wines = await fetch(`http://localhost:3000/wines/${id}`)
            .then(res => res.json())
            setWines(wines);
            imgUrl = wines.imageUrl
        console.log(wines)
    }
    fetchWines();
    }, [id]); 

// const categoryTitle = () => {
//     let flag;
//     console.log(country)
//         switch (country){
//             case (country == "Tyskland"):
//                 flag = "🇩🇪 Tyskland"
//                 break;
//             case (country == "Franrike"):
//                 flag = "🇫🇷 Franrike"
//                 break;
//             default:
//                 flag = "🍷"
//         }
//         return flag
//     }
// };
console.log(imgUrl)

    return (
        <div className="selected-wine" >
          <Link to="/">Back to start</Link>
            <h1>{wines.title}</h1>
                <div>
                    {/* <p>{categoryTitle()}</p> */}
                    <p>{wines.category}</p>
                    <p>
                        {wines.description}
                    </p>
                <img src={require('../img/bottle.png')} alt={wines.title} />
                </div>

            <div>
                <h2>Druvkomposition</h2>
                <ul>
                    {wines.grapes && wines.grapes.map((grapes:any) => (
                        <li key={grapes.grapes}>{grapes.grape} {grapes.typeOfGrape} {grapes.percentAmount}%</li>
                    ))}
                </ul>
                <h2>Vinmakning / Skörd</h2>
                <ol>
                    {wines.process && wines.process.map((step:any) => (
                        <li key={step.process}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default SelectedWine;