import React from 'react';
import logo from '../images/jumpstart.png'

const Sidebar = () => {

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
      };
    
  return (
    <div className="sidebar">
      <img src={logo} alt="" style={{ width: '200px', padding: '20px' }} />
      <a href="DashboardAdmin">Dashboard</a>
      <a href="Product">Product</a>
      <a href="AllUser">Users</a>
      <a href="AllOutlet">Outlet</a>
      <a href="Supplier">Supplier</a>
      <br />
      <a
        onClick={handleLogout}
        href="#logout"
        style={{
          bottom: 0,
          left: 0,
          textDecoration: "none",
        }}
      >
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
