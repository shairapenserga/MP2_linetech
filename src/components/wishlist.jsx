import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
 import './wishlist.css'

const Wishlist= ({ wishlist, setWishlist,addtocart})  => {

  // const incqty = (product) => 
  // {
  //   const exist = wishlist.find((x) => 
  //   {
  //     return x.id === product.id
  //   })
  //   setWishlist(wishlist.map((curElm) => 
  //   {
  //     return curElm.id === product.id ? { ...exist, qty: exist.qty + 1} : curElm
  //   }))
  // }
  // // decrese Quantity of cart product
  // const decqty = (product) => 
  // {
  //   const exist = wishlist.find((x) => 
  //   {
  //     return x.id === product.id
  //   })
  //   setWishlist(wishlist.map((curElm) => 
  //   {
  //     return curElm.id === product.id ? {...exist ,qty: exist.qty - 1}: curElm
  //   }))
  // }

  //Removing cart product
  const removeproduct = (product) => 
  {
    const exist = wishlist.find((x) => 
    {
      return x.id === product.id
    })
    if(exist.qty > 0)
    {
      setWishlist(wishlist.filter((curElm) => 
      {
        return curElm.id !== product.id
      }))
    }
  }

 const total = wishlist.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>





    <div className='wishlist'>
     <div className='Account'>
       <div>
          <h1>Wishlist</h1>
          {/* <button onClick={handleClick}>SignOut</button> */}
      </div> 
     </div> 
        {
            wishlist.length === 0 && 
            <>
            <div className='empty_wishlist'>
                <h2>Your Shopping wishlist is empty</h2>
                <Link to='/shop'><button>Shop Now</button></Link>
            </div>
            </>
        }
        <div className='container'>
          {
            wishlist.map((curElm) => 
            {
              return(
                <>
                <div className='box'>
                  <div className='img_box'>
                    <img src={curElm.image} alt=''></img>
                    </div>
                  <div className='detail'>
                    <div className='info'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: ${curElm.price}</p>
                    <p>Total: ${curElm.price * curElm.qty}</p>
                    </div>
                    <div className='quantity'>
                      {/* <button onClick={() => incqty (curElm)}>+</button>
                      <input type='number' value={curElm.qty}></input>
                      <button onClick={() => decqty (curElm)}>-</button> */}
                       <button onClick={() => addtocart (curElm)}>Add To Cart</button>
                    </div>
                    <div className='myicon'>
                      <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                    </div>
                  </div>
                </div>
               
                </>
              )
            })
          }
        </div>
        
        <div className='bottom'>
          {
            wishlist.length > 0 && 
            <>
            <div className='Total'>
              <h4>Sub Total: ${total}</h4>
            </div>
            {/* <button><Link to='/RegisterAndLogin' className="link">checkout</Link></button> */}
            </>
          }
        </div>
        </div>
    </>
  )
}
export default Wishlist;