import FeaturedWines from './components/FeaturedWines';
import NavBar from './components/NavBar';
import './App.css';

const App = () => 
  <div className="App">
    <div className="navbar">
      <NavBar/>
    </div>
    <div className="container">
      <FeaturedWines/>
    </div>
  </div>


export default App;
