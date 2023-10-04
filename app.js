 /*
  File Name: app.js
  Student: Adam Hodgins (301332994)
  Date: October 3 2023
  Comment: Handles launching the website
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Import the projectsData from projects.js
const projectsRouter = require('./routes/projects');
app.use('/', projectsRouter);
//Import the serviceData from Service.js
const servicesRouter = require('./routes/services');
app.use('/', servicesRouter);

// Import the index.js router and use it for all routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/contact', (req, res) => {
  const formData = req.body;
  res.redirect('/'); // Redirect back to the home page after capturing the form data
});
