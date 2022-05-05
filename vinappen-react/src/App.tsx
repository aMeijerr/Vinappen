import './App.css';
import Wines from './components/Wines';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


const App = () => 
  <div className="App">
    <div className="container">
    <Header />
    <NavBar/>
    <Wines />
    <Footer/>
    </div>
  </div>

export default App;
