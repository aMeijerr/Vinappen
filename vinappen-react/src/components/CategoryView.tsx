// import styled from "styled-components";
import {useState, useEffect} from "react";
import { fetchWinesByCategory } from "../api";
import WineListItem from "./WineListItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import '../styles/CategoryView.css'




const CategoryView = () => {
    const [wines, setWines] = useState([]);
    const { id } = useParams<string>();
    useEffect(() => {
        fetchWinesByCategory(id).then(wines => setWines(wines.data));
    }, [id])
    return (
        <>
        <div className="navbar">
        <NavBar/>
        </div>
        <div className="category-view">
            <Link to="/" className="return-link"><h5>Back to winelist</h5></Link>
            <h1>{id}</h1>
            {wines.map((wine: any) => 
            <WineListItem key={wine._id} wine={wine}></WineListItem> )}
        </div>
        </>
    )
    }
    export default CategoryView;