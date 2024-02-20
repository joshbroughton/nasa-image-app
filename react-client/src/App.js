import { useEffect, useState } from 'react';

import NasaImage from './NasaImage';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState();
  const [imageAlt, setImageAlt] = useState();

  async function fetchImage() {
    const response = await fetch(process.env.REACT_APP_SERVER_URL + '/apod');
    const data = await response.json();
    console.log(data['hdurl']);
    setImageUrl(data['hdurl']);
    setImageAlt(data['description']);
  }

  useEffect( () => {
    fetchImage();
  }, [])

  return (
    <div className="App">
      {imageUrl === undefined ? <p>Loading Image</p> : <NasaImage imageUrl={imageUrl} imageAlt={imageAlt} />}
    </div>
  );
}

export default App;
