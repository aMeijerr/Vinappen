import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoryView from './components/CategoryView';
import SelectedWine from './components/SelectedWine'


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/wines/:id" element={<SelectedWine/>} />
      <Route path="/category/:id" element={<CategoryView/>} />
    </Routes>
    </Router>
);

reportWebVitals();
