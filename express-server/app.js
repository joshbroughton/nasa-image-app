const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

// get the photo of the day
app.get('/apod', cors(corsOptions), async() => {
  try {
    const response = await fetch()
  }
})


