/*
  File Name: projects.js
  Student: Adam Hodgins (301332994)
  Date: October 3 2023
  Comment: Creates Project Data for the Projects Page  
*/


const express = require('express');
const router = express.Router();

const projectsData = [
  {
    name: 'Guild Wars API Extender',
    image: '/images/project1.png',
    description: 'Extends the Guild Wars 2 API endpoints for use with other popular plugins like BlishHud.',
    progress: 'WIP',
  },
  {
    name: 'Viewer Streams',
    image: '/images/project2.png',
    description: 'Allows stream viewers to directly interact with the broadcasters OBS scenes and sources. Built for use on Twitch.tv',
    progress: 'WIP',
  },
  {
    name: 'xOBS',
    image: '/images/project3.png',
    description: 'An OBS plugin to add new features to the popular streaming client. PiP mode - Stream scenes and sources directly to another OBS client. Quick Source - Allows users to set up new OBS sources with a single keystroke.',
    progress: 'WIP',
  },
];

router.get('/projects', (req, res) => {
    res.render('projects', { projects: projectsData });
  });
  
module.exports = router;
