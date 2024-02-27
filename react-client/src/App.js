import { useSelector } from 'react-redux';

import SearchNasa from './components/SearchNasa';
import NasaImage from './components/NasaImage';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';

function App() {
  const searchResults = useSelector((state) => state.search);

  if (searchResults.length === 0) {
    return (
      <div className="App">
        <Navbar />
        <NasaImage />
      </div>
    );
  } else {
    return(
      <div className="App">
        <h1>Search Results</h1>
        <SearchResults />
      </div>
    )
  }

}

export default App;
