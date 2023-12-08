import React from 'react'
import './footer.css'
import brand from './images/logoo.png'
import {Link} from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
const Footer = () => {
    return (
<>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
              <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Free Shipping</h3>
                        <p>Order above $1000</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet/>
                    </div>
                    <div className='detail'>
                        <h3>Return & Refund</h3>
                        <p>Money Back Gaurantey</p>
                    </div>
                </div>
            </div>
           
            <div className='right_box'>
                
                  
                  
                  
                <div className='bottom'>
                <img src={brand} alt='logo'></img>
                        <div className='box'>
                        <h3>contact us</h3>
                        <ul>

                        <li>
                            <Link to="./about" className='link'>
                               About Us </Link></li>
                            <li><Link to="./shop"className='link'>
                              Products</Link></li>
                            <li><Link to="./contact"className='link'>
                            Contact us</Link></li>
                            </ul>
                           

                    </div>
                    <div className='box'>
                        <h3> Company</h3>
                        <ul>
                        <li>Lipa City</li>
                            <li>09567114501</li>
                            <li>info@gmail.com</li>
                           </ul>
                           </div>
                           <div className='footer-icon'>
                           <a href="https://www.instagram.com/ ">
                            <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com ">
                            <FaSquareFacebook />
                            </a>
                           </div>
                          
                           
                           
                           
                    </div>
                    </div>
                     </div>
            
        </div>
       
       



    </>
  )
}








export default Footer;