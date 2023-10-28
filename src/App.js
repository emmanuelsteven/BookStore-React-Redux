import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/categories';
import Navi from './components/Navbar';
import Books from './components/BooksApp';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
