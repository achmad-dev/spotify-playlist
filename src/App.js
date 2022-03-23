import './App.css';
import data from './simple/simple.js'
import {AlbumImage, AlbumName, ButtonUrl} from './components/somecomponent/index.js'


function App() {
  return (
    <div className="App">
      <AlbumImage src={data.album.images[0].url}>
        <h2>{data.name}</h2>
      </AlbumImage>
      <AlbumName name={data.album.name} artist={data.artists[0].name}>
        < ButtonUrl url={data.album.artists[0].external_urls.spotify} />
      </ AlbumName>
    </div>
  );
}

export default App;
