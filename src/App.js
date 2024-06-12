import './App.css';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
 import Register from './pages/register';
 import Login from './pages/login';
import ProtectedRoutes from './Services/ProtectedRoutes';
function App(){
  return(
    <>
   <Routes>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/' element={<ProtectedRoutes/>}/>
  <Route path='/' element={<Dashboard/>}/>

   </Routes>
    </>
  )
}
export default App;