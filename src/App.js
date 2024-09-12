import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import World from './pages/World';
import 'bootstrap/dist/css/bootstrap.min.css';
import Politics from './pages/Politics';
import Bussiness from './pages/Bussiness';
import Sports from './pages/Sports';
import Technology from './pages/Technology';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/world' element={<World/>}/>
      <Route path='/politics' element={<Politics/>}/>
      <Route path='/bussiness' element={<Bussiness/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/technology' element={<Technology/>}/>
      
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
