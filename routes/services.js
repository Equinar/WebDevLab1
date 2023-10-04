/*
  File Name: services.js
  Student: Adam Hodgins (301332994)
  Date: October 3 2023
  Comment:  Creates Service Information for the Services Page   
*/


const express = require('express');
const router = express.Router();

const serviceData = [
  {
    name: 'Tutoring',
    description: "Young people will power our future, I offer tutoring services for middle school and highschool students looking to advance their knowledge and prepare for their future in STEM fields",
    available: 'Yes',
  },
  {
    name: 'Prototyping',
    description: "Have an idea for a new product, app or site? Let's work to make something you and your customers will love",
    available: 'Yes',
  },
];

router.get('/services', (req, res) => {
    res.render('services', { services: serviceData });
  });
  
module.exports = router;
