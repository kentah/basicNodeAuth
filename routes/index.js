const express = require('express');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const router = express.Router();

// welcome page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

//
router.get('/dashboard', ensureAuthenticated, (req, res) => 
  res.render('dashboard', {
    user: req.user
  })
);


module.exports = router;
