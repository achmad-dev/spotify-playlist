//import './App.css';
//import SearchPage from './pages/Search';
import Pages from './pages/index';
import Navbar from './components/navbar';
//import data from './simple/data'
//import PlayList from './components/playlist';
//import MusicCard from './components/MusicCard'
function App() {
  return (
    <div className="App-header">
      {/*<MusicCard data={data} />*/}
      {/*<PlayList data={data}/>*/}
      {/*<Navbar />*/}
      <Pages />
    </div>
  );
}

export default App;
