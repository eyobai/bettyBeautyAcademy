const db = require('./db');

const createStudent = (student, callback) => {
  const { name, contactDetails, email, address, password } = student;
  db.query(
    'INSERT INTO Students (name, contactDetails, email, address, password) VALUES (?, ?, ?, ?, ?)',
    [name, contactDetails, email, address, password],
    callback
  );
};

const findStudentByEmail = (email, callback) => {
  db.query('SELECT * FROM Students WHERE email = ?', [email], callback);
};

module.exports = { createStudent, findStudentByEmail };
