import { useState, useEffect } from "react";
import WineListItem from './WineListItem';

const FeaturedWines = () => {
    const [wines, setWines] = useState<any>([]);
    useEffect(() => {
        const fetchWines = async () => {
            const wines = await fetch('http://localhost:3000/wines')
            .then(res => res.json())
        setWines(wines);
    }
    fetchWines();
    }, [])

    return (
        <div className="wine-list">
            <h1>Featured Wines</h1>
            {wines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )}
        </div>
    )
}

export default FeaturedWines;