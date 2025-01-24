const db = require('./db');

const createStudent = (student, callback) => {
  const { firstName, lastName, email, address, password } = student;
  db.query(
    'INSERT INTO Students (firstName, lastName, email, address, password) VALUES (?, ?, ?, ?, ?)',
    [firstName, lastName, email, address, password],
    callback
  );
};

const findStudentByEmail = (email, callback) => {
  db.query('SELECT * FROM Students WHERE email = ?', [email], callback);
};

module.exports = { createStudent, findStudentByEmail };
