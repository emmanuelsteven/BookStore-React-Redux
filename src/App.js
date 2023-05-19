import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Categories from './components/categories';
import Books from './components/Books';
import { Navi } from './components/Navbar';

function App() {
  return (
    <div className="book-App">
      <BrowserRouter>
        <Navi />
        <Routes>
          ;
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
