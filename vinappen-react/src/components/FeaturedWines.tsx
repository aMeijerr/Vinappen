import { useState, useEffect } from "react";
import "../styles/FeaturedWines.css";
// import { useParams } from "react-router";
import WineListItem from './WineListItem';

const FeaturedWines = (): any => {
    const [whiteWines, setWhiteWines] = useState<string[]>([]);
    const [redWines, setRedWines] = useState<string[]>([]);
    const [searchString, setSearchString] = useState<string>("");
    
    useEffect(() => {
        let whiteWineList: string[] = [];
        let redWineList: string[] = [];
        // let wines: any;
        const url: any = searchString ? `${process.env.REACT_APP_API_BASE_URL}/wines/search/${searchString}` : process.env.REACT_APP_API_BASE_URL;
        const fetchWines = async () => {
            const wines = await fetch(url)
  
            .then(res => res.json())
            for(let wine of wines){
                //Reformat to .filter()
                wine.category.includes("Vitt") ? whiteWineList.push(wine) : redWineList.push(wine);
                setWhiteWines(whiteWineList);
                setRedWines(redWineList);
            }
    }
    fetchWines();
    }, [searchString])

    return (
        <div className="wine-list">
            <h1>Featured Wines</h1>
            <input type="text" placeholder="Search..." onChange={(event) => setSearchString(event.target.value)}/>
            <h3>Vitt vin</h3>
            {whiteWines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )}
            <h3>Rött vin</h3>
            {redWines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )}
        </div>
    )
}

export default FeaturedWines;