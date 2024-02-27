import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
} from "react-router-dom";

import NasaImage from './components/NasaImage';
import SearchResults from './components/SearchResults';
import Details from './components/Image';


function App() {
  return(
    <Routes>
      <Route exact path="/" element={<NasaImage />}></Route>
      <Route path="/search" element={<SearchResults />}></Route>
      <Route path="/image/:nasaID" element={<Details />}></Route>
    </Routes>
  )
}

export default App;
