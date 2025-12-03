import React, { useState } from 'react';

const CheckoutPage = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [orderSummary, setOrderSummary] = useState([
    // Example order items
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePlaceOrder = () => {
    // Place order logic here
    console.log('Order placed:', { shippingDetails, orderSummary });
  };

  const totalAmount = orderSummary.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Shipping Details</h2>
      <form>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" onChange={handleChange} required />
        <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} required />
      </form>
      <h2>Order Summary</h2>
      <ul>
        {orderSummary.map(item => (
          <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
        ))}
      </ul>
      <h3>Total: ${totalAmount}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
