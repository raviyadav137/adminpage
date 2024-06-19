import './App.css';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
 import Register from './pages/register';
 import Login from './pages/login';
import Users from './components/Users';
import Protected from './components/Protected';
import Navbar from './components/Navbar';

import ProductCard from './components/ProductCard'
import ProductDetail from './components/ProductDetail';


function App(){
 
  return(
    <>
    <Users>
    <Navbar/>
   <Routes>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  
  <Route path='/' element={<Protected Component={Dashboard}/>}/>
  
  <Route path="/product" element={<Protected Component={ProductCard}/>}/>
  <Route path="/product/:id" element={<ProductDetail />} />
  

   </Routes> 
   </Users>
   

    </>
  )
}


export default App;