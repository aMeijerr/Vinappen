import { useState, useEffect } from "react";
import WineListItem from './WineListItem';

const FeaturedWines = () => {
    let whiteWineList: string[] = [];
    let redWineList: string[] = [];
    const [whiteWines, setWhiteWines] = useState<any>([]);
    const [redWines, setRedWines] = useState<any>([]);
    useEffect(() => {
        const fetchWines = async () => {
            const wines = await fetch('http://localhost:3000/wines')
            .then(res => res.json())
            for(let wine of wines){
                wine.category.includes("Vitt") ? whiteWineList.push(wine) : redWineList.push(wine);
                setWhiteWines(whiteWineList);
                setRedWines(redWineList);
            }
    }
    fetchWines();
    }, [])

    return (
        <div className="wine-list">
            <h1>Featured Wines</h1>
            <h3>Vitt vin</h3>
            {whiteWines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )}
            <h3>Rött vin</h3>
            {redWines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )}
            {/* <h1>Featured Wines</h1>
            {wines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )} */}
        </div>
    )
}

export default FeaturedWines;