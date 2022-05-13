// import "./NavBar.css"


// //ADD <Link> with react routing
// const NavBar = () => (
//     <div className="navbar">
//         <h3>Categories</h3>
//         <ul className="navbar-links">
//         <li><a href="/">France</a></li>
//         <li><a href="/">Italy</a></li>
//         <li><a href="/">Spain</a></li>
//         <li><a href="/">Greece</a></li>
//         </ul>
//     </div>
// )

// export default NavBar

import { useState, useEffect } from "react";
import { fetchCategories } from "../api";
import {Link} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    // const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);
    useEffect(() => {
        fetchCategories().then(categories => setCategories(categories.data));
        
    }, [])
    console.log(categories)
  
    return (
        <div className="navbar">
            {/* <h3 className="nav-item" onClick={() => setShowCategories(!showCategories)}>Kategorier 🍷</h3> */}
            {categories && categories.map((category, i):any => <Link to={`/category/${category._id}`} key={category._id}><p key={category._id}>{category._id} ({category.count})</p> </Link>).splice(2, 10)}
        </div>
            )
}

export default NavBar