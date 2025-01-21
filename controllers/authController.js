const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findStudentByEmail } = require('../models/student');
const SECRET_KEY = process.env.SECRET_KEY;

const login = (req, res) => {
  const { email, password } = req.body;
  findStudentByEmail(email, async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const student = results[0];
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate a token
    const token = jwt.sign({ id: student.id, email: student.email }, SECRET_KEY, { expiresIn: '1h' });

    // Respond with the token and user info
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: student.id,
        name: student.name,
        email: student.email,
        contactDetails: student.contactDetails,
        address: student.address
      }
    });
  });
};

module.exports = { login };
