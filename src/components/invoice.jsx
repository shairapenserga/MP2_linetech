import React from 'react';
import './invoice.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import invoice from './images/logoo.png'

const Invoice = () => {
  return (

    <div className="invoice">
            <div className='form'>
<h1>     </h1>
</div>
      <div className="header">
      <img src={invoice} alt=''></img>
        <h1>Invoice</h1>
        <div className="invoice-details">
          {/* Include invoice details like number, date, customer info */}
          <p>Invoice Number: INV-001</p>
          <p>Date: December 11, 2023</p>
          <p>Customer: Ivan Mendoza</p>
          {/* Add more invoice details as needed */}
        </div>
      </div>
      <div className="details">
        <h2>Item List</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Display items and their details */}
            <tr>
              <td>iPhone 15</td>
              <td>2</td>
              <td>$1029</td>
              <td>$2058</td>
            </tr>
            <tr>
              <td>JBL JR 310BT</td>
              <td>2</td>
              <td> $36</td>
              <td>$72</td>
            </tr>
            <tr>
              <td>HUAWEI D14 (2023)</td>
              <td>1</td>
              <td>$673</td>
              <td>$673</td>
            </tr>
            {/* Add more item rows */}
          </tbody>
        </table>
      </div>
      <div className="total">
        <h2>Total</h2>
        <p>Total Amount: $2803</p>
        {/* Include tax, discounts, etc. */}
      </div>
      <div className="footer">
        <p>Thank you for your Purchase!</p>
      
      </div>
      </div>
      
    
  );
};

export default Invoice;