import React, { useState } from 'react';
import './Header.css';
import headerimg from '../../assets/headerImag.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    alert(`Searching for: ${searchTerm}`);
  };

  const handleOrderClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    alert('Order placed!');
  };

  return (
    <div className='container'>
      <div className="header-text">
        <h2>EcomChain <br />pharmaceuticals</h2>
        <p>EcomChain Pharmaceuticals offers a reliable online platform for easy access to a wide range of pharmaceutical products, ensuring fast, secure deliveries.</p>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search Medicine..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit" className="searchButton">Search</button>
        </form>
        
        <button onClick={handleOrderClick} className="orderButton">
          Order
        </button>


        {!isLoggedIn && (
          <button onClick={() => navigate('/login')} className="loginButton">
            Login
          </button>
        )}
      </div>

      <div className='header-img'>
        <img src={headerimg} alt="" />
      </div>
    </div>
  );
}

export default Header;
