import "./NavBar.css"


//ADD <Link> with react routing
const NavBar = () => (
    <div className="navbar">
        <h3>Categories</h3>
        <ul className="navbar-links">
        <li><a href="/">France</a></li>
        <li><a href="/">Italy</a></li>
        <li><a href="/">Spain</a></li>
        <li><a href="/">Greece</a></li>
        </ul>
    </div>
)

export default NavBar