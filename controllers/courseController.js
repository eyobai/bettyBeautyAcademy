const { getAllCourses, createCourse } = require('../models/course');

const getCourses = (req, res) => {
  getAllCourses((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

const addCourse = (req, res) => {
  const { title, description, fee } = req.body;
  createCourse({ title, description, fee }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, title, description, fee });
  });
};

module.exports = { getCourses, addCourse };
