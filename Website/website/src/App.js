
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Home/Navbar';
import Card from './Component/Home/Card';
// import Category from './Component/Home2/Category';

import Main from './Component/Home/Home2/Main';
import Navbar2 from './Component/Home/Home2/Navbar2';
import Toys from './Component/Home/Home2/Toys';
import Page3 from './Component/Home/Home2/Page3';
import Footer from './Component/Home/Home2/Footer';
import AboutUs from './Component/Home/Home2/AboutUs';

function App() {
  return (
  <>
   <BrowserRouter>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/card' element={<Card/>}/>
    <Route path='/navbar2' element={<Navbar2/>}/>
    {/* <Route path='/category' element={<Category/>}/> */}
    <Route path='/' element={<Main/>}/>
    <Route path='/toys' element={<Toys/>}/>
    <Route path='/page3' element={<Page3/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/about' element={<AboutUs/>}/>

  </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
