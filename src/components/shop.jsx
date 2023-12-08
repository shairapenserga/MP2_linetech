import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './shop.css'
import productdetail from './home_product'
// import productdetail from './home_product'

import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';
const Shop = ({shop, Filter, allcatefilter, addtocart, addItemToWishlist}) => {
    // Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false)
    // Detail Page Data
    const [detail, setDetail] = useState([])
    //Showing Detail Box
    const detailpage = (product) => 
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => 
    {
        setShowDetail(false)
    }
    // const [wishlistItems, setWishlistItems] = useState([]);

    // const addItemToWishlist = (item) => {
    //   setWishlistItems([...wishlistItems, item]);
    //   console.log('Item added to wishlist')
    // };
  



  return (
    <>

 {/* Show Detail */}
    {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4>{detail.Name}</h4>
                    <h2>{detail.Name}</h2>
                    <p>{detail.caption}</p>
                    <h3>${detail.price}</h3>


                    <button onClick={() => addtocart (detail)}>Add To Cart</button>
                </div>
            </div>
        </div>
        
        </>
        : null
    }
<div className="Shop">
    
            <div className="top_banner">
              <div className="container-hero">
                <div className="detail">
                <p>ESSENTIALS </p> 
                 <h2>
Made in sync with your best self</h2>  
                      
                 
                 
                 
               </div>  
               <div className="img_box">      
               
               </div>   
               </div> 
               </div> 
               </div>







 <div className='shop'>
 <h2>Shop</h2>
 <p></p>
   
 <div className='container'>
 <div className='left_boxed'>
 <div className='category'>
 <div className='header'>
 <h3>all categories</h3>
 </div>
 
 <div className='box'>
                        <ul>
                            
                            
                            <li onClick={() => allcatefilter ()}> All</li>
                            <li onClick={() => Filter ("phone")}> phone</li>
                            <li onClick={() => Filter ("tablet")}>Tablets</li>
                            <li onClick={() => Filter ("laptop")}> laptop</li>
                            
                            <li onClick={() => Filter ("speaker")}>speaker</li>
                            <li onClick={() => Filter ("accessories")}>Accessories</li>
                            
        

      
      </ul>
      <div>
    
      </div>
    </div>

                           
                       
                        
                        </div>
                        </div> 
                        </div> 
                        </div>
                     
 {/* <div className='banner'> 
<div className='img_box'>
<img src={banner} alt='leftbanner'></img>
</div>
 </div>     */}
                

 <div className='product_box'>
<h2> </h2> 
 <div className='product_container'>  
{
                    shop.map((curElm)=> 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                               <li onClick={() => addItemToWishlist (curElm)}><AiFillHeart /></li>
                                               
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h4>{curElm.Name}</h4>
                                            <p>$ {curElm.price}</p>
                                            <button onClick={() => addtocart (curElm)}>Add To Cart</button>
                                        </div>
                                        
                        </div> 
                                        
                                    </>
                                )
                      })
                        }
                        </div> 
                        </div>
                        
                                  
    </>
  )   
}
export default Shop;