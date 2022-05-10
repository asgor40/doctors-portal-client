import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
