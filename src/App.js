import './App.css';
import data from './simple/simple.js'
import {AlbumImage, AlbumName, ButtonUrl, AlbumDesc} from './components/somecomponent/index.js'


function App() {
  return (
    <div className="App">
      <AlbumImage src={data.album.images[0].url}>
        <AlbumDesc name={data.name}/>
      </AlbumImage>
      <AlbumName name={data.album.name} artist={data.artists[0].name}>
        < ButtonUrl url={data.album.artists[0].external_urls.spotify} />
      </ AlbumName>
    </div>
  );
}

export default App;
