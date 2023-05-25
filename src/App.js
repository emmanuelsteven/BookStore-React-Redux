import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/categories';
import Navi from './components/Navbar';
import Books from './components/booksApp';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
