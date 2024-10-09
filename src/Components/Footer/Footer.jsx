import React from 'react'
import logo from '../../assets/ecclogo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>EcomChain Pharmaceuticals offers a reliable online platform for easy access to a wide range of pharmaceutical products, ensuring fast, secure deliveries.</p>
            </div>
            <div className='company-contacts'>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Medicines</a></li>
                    <li><a href='/'>Consult doctors</a></li>
                    <li><a href='/'>Login</a></li>
                    <li><a href='/'>Signup</a></li>
                    <li><a href='/'>Your Orders</a></li>
                </ul>
            </div>
            <div className='company-contacts'>
                <h3>Contact</h3>
                <ul>
                    <li>Address <br/> Ecomchain, Kochi</li>
                    <li>Phone <br/> +91 9605788637</li>
                    <li>EMail <br/> midhunmahesh2001@gmail.com</li>
                </ul>
            </div>
            <div  className='company-contacts'>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>twiter</a></li>
                    <li><a href='/'>facebook</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer