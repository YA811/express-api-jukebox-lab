const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override');


//controllers file
const trackRouter = require('./controllers/track');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));  // for handling PUT and DELETE requests

// track route
app.use('/tracks', trackRouter);

// Routes go here

app.listen(4000, () => {
  console.log('The express app is ready!');
});