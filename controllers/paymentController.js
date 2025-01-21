const axios = require('axios');

const initializePayment = async (req, res) => {
  const { amount, currency, email, first_name, last_name, phone_number, tx_ref, callback_url, return_url } = req.body;

  const options = {
    method: 'POST',
    url: 'https://api.chapa.co/v1/transaction/initialize',
    headers: {
      'Authorization': 'Bearer CHASECK-Ryg9wi0dyiyB1N3mm63LsOBY9iXcw2SI', // Replace with your actual Chapa secret key
      'Content-Type': 'application/json'
    },
    data: {
      amount,
      currency,
      email,
      first_name,
      last_name,
      phone_number,
      tx_ref,
      callback_url,
      return_url,
      "customization[title]": "Payment for my favourite merchant",
      "customization[description]": "I love online payments",
      "meta[hide_receipt]": "true"
    }
  };

  try {
    const response = await axios(options);
    res.json(response.data);
  } catch (error) {
    // Log the error details
    console.error('Error initializing payment:', error.response ? error.response.data : error.message);
    
    // Send a response with the error message
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
};

module.exports = { initializePayment };