import { useState, useEffect } from "react";
// import { useParams } from "react-router";
import WineListItem from './WineListItem';

const FeaturedWines = (): any => {
    const [whiteWines, setWhiteWines] = useState<string[]>([]);
    const [redWines, setRedWines] = useState<string[]>([]);
    const [searchString, setSearchString] = useState<string>("");
    
    // const { searchString } = useParams();
    
    
    useEffect(() => {
        let whiteWineList: string[] = [];
        let redWineList: string[] = [];
        let wines: any;
        const url = `http://localhost:3000/wines/search/${searchString}`
        const fetchWines = async () => {
        searchString ? wines = await fetch(url) : wines = await fetch("http://localhost:3000/wines")
  
            .then(res => res.json())
            for(let wine of wines){
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
            {/* <form onSubmit={FeaturedWines}> */}
            <input type="text" onChange={(event) => setSearchString(event.target.value)}/>
            {/* <button>Search</button>
            </form> */}
            <h3>Vitt vin</h3>
            {whiteWines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )}
            <h3>Rött vin</h3>
            {redWines.map((wine: any) => <WineListItem key={wine._id} wine={wine}></WineListItem> )}
        </div>
    )
}

export default FeaturedWines;