
// import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import DashboardAdmin from './Pages/DashboardAdmin';
import Supplier from './Pages/Supplier';
import AllUser from './Pages/AllUser';
import Bills from './Pages/Bills';
import AllOutlet from './Pages/AllOutlet';
import DashboardUser from './Pages/DashboardUser';
import Profile from './Pages/Profile';
import Product from './Pages/Product';
import Stock from './Pages/Stock';

function App() {
  return (

    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="DashboardAdmin" element={<DashboardAdmin/>} />
        <Route path="Supplier" element={<Supplier/>} />
        <Route path="AllUser" element={<AllUser/>} />
        <Route path="AllOutlet" element={<AllOutlet/>} />
        <Route path="Product" element={<Product/>} />
        <Route path="Stock" element={<Stock/>} />

        {/* user */}
        <Route path="Bills" element={<Bills/>} />
        <Route path="DashboardUser" element={<DashboardUser/>} />
        <Route path="Profile" element={<Profile/>} />

      </Routes>
     </Router>


     
    
    
    </>

    

  );
}

export default App;
