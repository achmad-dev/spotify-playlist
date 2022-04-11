import Search from '../../Component/Search'
import { useState } from "react";
import Form from "../../Component/Form";
import Card from '../../Component/Card';
import styled from 'styled-components';

const Div = styled.div`
  justify-content: center;
  align-items: center;
  `;


const CreatePlayList = () =>{
    const [tracks, setTracks] = useState([]);
    const [selected, setSelected] = useState([]);

    const onSuccessSearch = (tracks) => {
        const selectedTracks = filterSelectedTracks();
        const searchDistincTracks = tracks.filter(track => !selected.includes(track.uri));

        setTracks([...selectedTracks, ...searchDistincTracks]);
      }

      const toggleSelect = (track) => {
        const uri = track.uri;

        if (selected.includes(uri)) {
          setSelected(selected.filter(item => item !== uri));
        } else {
          setSelected([...selected, uri]);
        }
      }

      const filterSelectedTracks = () => {
        return tracks.filter(track => selected.includes(track.uri));
      }

    return(
        <Div className="home">
            <Form  uriTracks={selected}/>
          <Div className='search-bar'>
            <Search  onSuccess={(tracks) => onSuccessSearch(tracks)}/>
          </Div>
          <Div className='songs'>
            {tracks.map(track => (
              <Card
                key={track.id}
                img = {track.album.images[0].url}
                title = {track.name}
                artists ={track.artists[0].name}
                toggleSelect={() => toggleSelect(track)}
              />
            ))}
          </Div>
        </Div>
    )
}

export default CreatePlayList;