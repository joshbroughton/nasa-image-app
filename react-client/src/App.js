import { useSelector } from 'react-redux';

import SearchNasa from './components/SearchNasa';
import NasaImage from './components/NasaImage';
import SearchResults from './components/SearchResults';

function App() {
  const searchResults = useSelector((state) => state.search);

  if (searchResults.length === 0) {
    return (
      <div className="App">
        <h1>Nasa Astronomy Picture of the Day</h1>
        <SearchNasa />
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
