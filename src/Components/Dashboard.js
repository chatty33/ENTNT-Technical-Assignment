import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {
  // these numbers are fetched from an API
  const NoOfProducts = 15;
  const CurrOrder = 8;

  return (
    <div className="container">
      <h2 className="title"> Enterprise Resource Planning</h2>
      <div className="metricsContainer">
        <div className="metric">
          <Link to="/product">
            <h3>Number of Products</h3>
            <p>{NoOfProducts}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Current Orders</h3>
            <p>{CurrOrder}</p>
          </Link>
        </div>
      
        <div className="metric">
          <a href="https://github.com/chatty33/" target="_blank" rel="noopener noreferrer">
            <h3>View My Profile</h3>
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
