const express = require('express');
const { getCourses, addCourse } = require('../controllers/courseController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getCourses);
router.post('/', authenticateToken, addCourse);

module.exports = router;
