import React, { useState } from 'react'
import Nav from './components/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/rout'
import Footer from './components/footer'
import Homeproduct from './components/home_product'
import Wishlist from './components/wishlist'
import avatar from './components/images/avatar.png'
import float from './components/images/float.png'
import ChatBot from 'react-simple-chatbot'
 import { ThemeProvider } from 'styled-components'





const App = () => {
  // Add To cart
  const [cart, setCart] = useState([])
  //Shop Page product
  const [shop, setShop] = useState(Homeproduct)
    //Shop Search Filter
  // const [search, setSearch] = useState('')
  //Shop category filter
  const [wishlist, setWishlist] = useState([])
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) => 
    {
      return product.cat === x 
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }

  //Add To cart
  const addtocart = (product) =>
  {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist)
    {
      alert("This product is alleardy added in cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("Added To cart")
    }
  }

//  wishlist
const addItemToWishlist = (product) =>
{
  const exist = wishlist.find((x) => {
    return x.id === product.id
  })
  if(exist)
  {
    alert("This product is all ready added in wishlist")
  }
  else
  {
    setWishlist([...wishlist, {...product, qty:1}])
    alert("Added To wishlist")
}
}


  
const theme = {
  background: '#fff',
  headerBgColor: '#941975',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#941975',
  botFontColor: '#fff',
  userBubbleColor: '#941975',
  userFontColor: '#fff',
 
}


  return (
    <>
    <BrowserRouter>
     <Nav/>
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} wishlist={wishlist}    addtocart={addtocart} setWishlist={setWishlist} addItemToWishlist={addItemToWishlist} />
  
    </BrowserRouter>   
    <ThemeProvider theme={theme}>
    <ChatBot
  steps={[
    {
      id: '1',
      message: 'Welcome! How can I assist you?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: "I'm sorry, I didn't understand that. Please try rephrasing you message.",
      trigger: '4'
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: "We sincerely apologize for the delay in processing your order. Your satisfaction is our top priority, and we understand the inconvenience this delay may have caused. Please send here ",
      trigger: '6',
    },
    {
      id: '6',
      message: "Hello! To assist you better, could you please provide the tracking number associated with your order?",
      trigger: '7',
    },
    {
      id: '7',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: '1',
    },
          
  ]}
     floating={true}
     floatingIcon={float}
     avatarIcon={avatar}
      />
                 
      </ThemeProvider>
    
      
            </>
           
          
  )
}


 export default App