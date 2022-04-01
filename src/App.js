//import './App.css';
//import SearchPage from './pages/Search';
import data from './simple/simple'
import MusicCard from './components/MusicCard'
function App() {
  return (
    <div className="App-header">
      <MusicCard data={data} />
    </div>
  );
}

export default App;
