/*
  File Name: index.js
  Student: Adam Hodgins (301332994)
  Date: October 3 2023
  Comment: Sets up routing for the web pages  
*/

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/projects', (req, res) => {
  res.render('projects', { projectsData });
});

router.get('/services', (req, res) => {
  res.render('services', { serviceData });
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
