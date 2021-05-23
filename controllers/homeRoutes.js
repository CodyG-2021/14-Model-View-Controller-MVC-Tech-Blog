const router = require('express').Router();
const { User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/SignUp', (req, res) => {
  res.render('SignUp');
});

module.exports = router;
