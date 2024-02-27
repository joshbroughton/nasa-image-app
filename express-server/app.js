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
app.get('/apod', cors(corsOptions), async (req, res) => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
    const image = await response.json();
    res.json(image)
  } catch(error) {
    console.error(error.message);
  }
})

app.get('/search', cors(corsOptions), async (req, res) => {
  const search  = req.query.search;
  const page = req.query.page ? req.query.page : 1;
  console.log(search)
  try {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${search}&media_type=image&page_size=10&page=${page}`)
    const data = await response.json();
    console.log(data);
    res.json(data)
  } catch(error) {
    console.error(error.message);
  }
})

app.get('/image/:nasaID', cors(corsOptions), async (req, res) => {
  const nasaID = req.params.nasaID;
  try {
    const response = await fetch(`https://images-api.nasa.gov/asset/${nasaID}`)
    const data = await response.json();
    console.log(data);
    res.json(data)
  } catch(error) {
    console.error(error.message);
  }
})

app.listen(port, () => {
  console.log(`Nasa Image Server is Listening`);
})


