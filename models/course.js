const db = require('./db');

const getAllCourses = (callback) => {
  db.query('SELECT * FROM Courses', callback);
};

const createCourse = (course, callback) => {
  const { title, description, fee } = course;
  db.query(
    'INSERT INTO Courses (title, description, fee) VALUES (?, ?, ?)',
    [title, description, fee],
    callback
  );
};

module.exports = { getAllCourses, createCourse };
