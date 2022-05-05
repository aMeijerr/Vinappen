import "./NavBar.css"


//ADD <Link> with react routing
const NavBar = () => (
    <div className="navbar">
        <div className="navbar-links">
        <a href="/">France</a>
        <a href="/">Italy</a>
        <a href="/">Spain</a>
        <a href="/">Greece</a>
        </div>
        <div className="navbar-input">
            <input type="text" placeholder="What would you like?"></input>
        </div>
    </div>
)

export default NavBar