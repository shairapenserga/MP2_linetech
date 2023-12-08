import React from "react";
// import technomp from "./images/for.png";
import "./contact.css";

const handleClick = () => {
  alert('Sent Message Success')
}

const Contact = () => {
  return (
    <div className="contact"> 
      {/* <div className="leftSide" style={{ backgroundImage: `url(${technomp})` }}> */}
      <div className="leftSide">
        {/* <img src={technomp}></img> */}
      </div>
      <div className="rightSide">
        <h1> Contact Us</h1>
       
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button onClick={handleClick} type="submit"> Send Message</button>
        </form>
        </div>
        </div>
       
  );
}

export default Contact;