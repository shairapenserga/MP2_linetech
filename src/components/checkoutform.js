import React, { useState } from 'react';
import './checkout.css'
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// import {queryParams} from './invoice'
import { Link } from 'react-router-dom'

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'Credit Card',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
    // Add more fields as needed for your checkout form
  });

  // const history= useHistory();

  const handleChange = (e) => {
  
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 const handleSubmit = (e) => {
 e.preventDefault();

  //   setSubmitted(true);

  //   history.push('/invoice')

// const queryParams = new 
// URLSearchParams (formData).toString ();
// history.push (`/another-page? $ {queryParams}`);
 


   
    console.log('Form data:', formData);
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'Credit Card',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    });
  };

  return (
    
    <div className="form_container">
    <form onSubmit={handleSubmit}>
      <h2>Shipping Information</h2>
      <label>
    
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
       <input 
       type="text" 
        value={formData.email} 
        name="email" 
        placeholder="Enter your email" 
        onChange={handleChange}
        required />
    </label>
   
    <label>
       <input 
       type="text" 
        value={formData.address} 
        name="address" 
        placeholder="complete address" 
        onChange={handleChange}
        required />
    </label>
    <label>
    <input 
       type="text" 
        value={formData.city} 
        name="city" 
        placeholder="City" 
        onChange={handleChange}
        required />
        </label>
        <label>
        <input
        type="text" 
        value={formData.postalCode} 
        name="postalCode" 
        placeholder="Postal Code" 
        onChange={handleChange}
        required />
        </label>

      <h2>Payment Information</h2>
      <label>
        Payment Method:
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >  
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Gcash">Gcash</option>
        </select>
       
      </label>
     
      {formData.paymentMethod === 'Credit Card' && (
        <div>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </label>
          </div>
          )}
   
   {formData.paymentMethod === 'PayPal' && (
     <div>
       <label>
         Account Number:
         <input
           type="text"
           name="cardNumber"
           value={formData.cardNumber}
           onChange={handleChange}
           required
         />
       </label>
       </div>  
     
      )}
    
   {formData.paymentMethod === 'Gcash' && (
     <div>
       <label>
        Phone Number:
         <input
           type="text"
           name="cardNumber"
           value={formData.cardNumber}
           onChange={handleChange}
           required
         />
       </label>
       </div>  
     
      )}
    
     <button><Link to='/invoice' className="link">checkout</Link></button>
 
     </form> 
     </div> 
     
    
  );
};

export default CheckoutForm;



