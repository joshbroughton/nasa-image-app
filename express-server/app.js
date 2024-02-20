const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port = 5000;
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

// get the photo of the day
//cors(corsOptions)
app.get('/apod', cors(corsOptions), async(req, res) => {
  console.log(req.get('host'))
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
    const image = await response.json();
    res.json(image)
  } catch(error) {
    console.error(error.message);
  }
})

app.listen(port, () => {
  console.log(`Nasa Image Server is Listening`);
})


