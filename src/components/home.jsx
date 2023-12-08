
import React, { useState } from 'react'
import './home.css'
import CarouselComponent from './CarouselComponent';
//  import logo from './images/JBL3.png' 
import logo from './images/display.png' 
// import Banner from './images/4.png' 
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import Homeproduct from './home_product'

import { Link } from 'react-router-dom'
 

const Home=({addtocart}) => {
   //Tranding Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  // Filter of tranding product
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }

  // All Trending Product
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }

//  const navigate = useNavigate();
//   // For Logout
//   const handleLogout = async () => {
//     await signOut(auth);
//     localStorage.removeItem('token')
//     localStorage.removeItem('user')
//     Navigate('/login');



return (
  <>


        <div className="home">
       
        <div className="top_banner">
              <div className="caption">
              <h3>True wireless gaming earbuds</h3>
                 <h2>JBL Quantum <br/>TWS Air </h2>  
                      
                 <p>30% off at your first order</p> 
                 <Link to='/shop' className="link">Shop Now</Link>
                 </div>
                
              
                <div className="img_box">     
            <img src={logo} alt="item" className="earbuds"></img>  
                
               </div>   
               </div> 
               </div> 
             

            

               <div className='container'>
                
            <div className='trending'>
        
              <div className='header'>
                 <div className='heading'>
                 <h2 onClick={() => allTrendingProduct ()}>trending product</h2>

               </div> 
                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')}>New</h3 >
                  <h3 onClick={() => filtercate ('featured')}>Featured</h3 >
                  <h3  onClick={() => filtercate ('top')}>top selling</h3>
                </div> 
              </div>
              </div>
                
              <div className='products'>
              <div className='container'>
              {
                    trendingProduct.map((curElm) => 
                    {
                      return(
                        <>
                         <div className='box'>
                          <div className='img_box'>
                          <img src={curElm.image} alt=''></img>
                          <div className='icon'>
                              {/* <div className='icon_box'>
                               <AiFillEye />
                              </div>    
                              <div className='icon_box'>
                              <AiFillHeart /> 
                              </div>                         */}
                            </div> 
                           </div> 
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                           <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                          </div>
                          </div> 
                           
                        </>
                      )
                    })
                  } 
                </div>
                  <div className='newbtn'>
                <button>
                <Link to='/shop' className="wow">Shop More</Link></button>
              </div> 
                </div>
                </div>

                <div className="About">
            <div className="bottom_banner">
              <div className="container-hero">
                <div className="detail">
                
                 <h2>Over-Ear & On-Ear <br></br>Headphones</h2>  
                      
                 <p>Experience the mastery of Our headsets.</p> 
                 
                 <Link to='/shop' className="link">Shop Now</Link>
               </div>  
               <div className="img_box">       
               </div> 
               </div> 
               </div> 
               </div> 
             
               

       {/* <button onClick={handleLogout}>Logout</button>  */}








      <CarouselComponent />
    
      </>
  )
                }

export default Home



