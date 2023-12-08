import React  from 'react'
import './about.css'
import bannertop from './images/banner1.png'
import { Link } from 'react-router-dom'
import Mpblack from "./images/banner1.png";


const About = () =>  {
 return (
 <>

 <div className='container-about'>
  <div className='top-banner'>
      {/* <div className="aboutTo" style={{ backgroundImage: `url(${Mpblack})` }} > */}
      </div>
      </div>
      <div className="about">
      <div className="aboutBottom">
      <h1> ABOUT US</h1>
        <p>
          Welcome to our gadget store, where innovation meets excitement! At our store, we curate the latest and greatest in cutting-edge technology, providing a haven for tech enthusiasts and casual users alike. Immerse yourself in a world of sleek design and powerful functionality as you explore our extensive range of gadgets, from the sleekest smartphones to the most advanced smart home devices. Our passionate team is dedicated to staying ahead of the tech curve, ensuring that you have access to the most sought-after products on the market. Whether you're a seasoned tech pro or just starting your journey into the digital realm, our store is the ultimate destination for those who crave the thrill of innovation. Elevate your lifestyle with the best in gadgets because in a world that's constantly evolving, your tech should too. Welcome to the future of innovation, welcome to our gadget store.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
      </div>
      </div>



 </>
 )
}
export default About;