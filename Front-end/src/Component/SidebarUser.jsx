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
      <a href="DashboardUser">Dashboard</a>
      <a href="Profile">Profile</a>
      <a href="Bills">Bills</a>
     
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
