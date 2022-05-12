// import styled from "styled-components";
import {useState, useEffect} from "react";
import { fetchWinesByCategory } from "../api";
import WineListItem from "./WineListItem";
import { useParams } from "react-router-dom";
import './CategoryView.css'




const CategoryView = () => {
    const [wines, setWines] = useState([]);
    const { id } = useParams<any>();
    useEffect(() => {
        fetchWinesByCategory(id).then(wines => setWines(wines.data));
    }, [id])
    return (
        <div className="category-view">
            <h1>{id}</h1>
            {wines.map((wine: any) => 
            <WineListItem key={wine._id} wine={wine}></WineListItem> )}
        </div>
    )
    }
    export default CategoryView;