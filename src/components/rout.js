import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './home';
import Shop from './shop';
import Nav from './nav';
import About from './about';
import Footer from './footer';
import Cart from './cart';
import Contact from './contact'
// import Login from './login';
// import Signup from './signup';
// import Favorites from './favorites'
import RegisterAndLogin from './RegisterAndLogin'
import HomeScreen from './HomeScreen';
import CheckoutForm from './checkoutform';
import Invoice from './invoice';
 import Wishlist from './wishlist';
 

        





const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart,  addItemToWishlist ,wishlist,setWishlist,}) => {
return (
<>
  {/* <Nav/>   */}
<Routes>
 <Route path='/' element={<Home addtocart={addtocart}/>}/> 
{/* <Route path="/" element={<RegisterAndLogin/>} /> */}
        <Route path='/cart' element={<Cart cart={cart} setCart ={setCart}/>} />
        <Route path='/shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} addItemToWishlist={addItemToWishlist}/>} /> 
        <Route path='/about' element= {<About/>}/>
        <Route path='/cart' element= {<Cart/>}/>
        {/* <Route path='/favorites' element= {<Favorites/>}/> */}
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/RegisterAndLogin' element= {<RegisterAndLogin/>}/>
        {/* <Route path='/signup' element= {<Signup/>}/> */}
        <Route path='/HomeScreen' element= {<HomeScreen/>}/>
        <Route path='/checkout' element= {<CheckoutForm/>}/>
        <Route path='/invoice' element= {<Invoice/>}/>
        <Route path='/wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} addtocart={addtocart}/>}></Route>
</Routes>
     <Footer/> 
 </>
 );



}

export default Rout