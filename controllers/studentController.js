const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createStudent } = require('../models/student');

const SECRET_KEY = 'your_secret_key'; // Replace with your actual secret key

const register = async (req, res) => {
  const { firstName, lastName, email, address, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  createStudent({ firstName, lastName, email, address, password: hashedPassword }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Generate a token
    const token = jwt.sign({ id: result.insertId, email }, SECRET_KEY, { expiresIn: '1h' });

    // Respond with the token
    res.status(201).json({ message: 'Registration successful', token });
  });
};

module.exports = { register };
