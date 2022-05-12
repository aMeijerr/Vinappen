// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FeaturedWines from './components/FeaturedWines';
// import SelectedWine from './components/SelectedWine';

import NavBar from './components/NavBar';

import './App.css';

// interface MatchParams {
//   id: string;
// }

// interface MatchProps extends RouteComponentProps<MatchParams> {

// }

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
