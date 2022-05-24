import { useState, useEffect, SetStateAction } from "react";
import { fetchCategories } from "../api";
import {Link} from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [active, setActive] = useState("")
    useEffect(() => {
        fetchCategories().then(categories => setCategories(categories.data));
        
    }, [])

    const onClick = (id: SetStateAction<string>) => {
        setActive(id);
    }
  
    return (
        <div className="navbar">
            {categories && categories.map((category):any => 
            <Link to={`/category/${category._id}`} key={category._id}>
                <p onClick={() => {
                    onClick(category._id);
                }}
                className={category._id === active ? "active" : "deactive"} key={category._id}>{category._id} ({category.count})</p> 
            </Link>).splice(2, 10)}
        </div>
            )
}

export default NavBar