import SearchNasa from './features/SearchNasa';
import NasaImage from './components/NasaImage';

function App() {
  return (
    <div className="App">
      <h1>Nasa Astronomy Picture of the Day</h1>
      <SearchNasa />
      <NasaImage />
    </div>
  );
}

export default App;
