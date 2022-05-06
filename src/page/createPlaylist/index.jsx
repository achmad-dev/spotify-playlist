import { useState } from "react";
import Modal from "react-modal";
import { ReactComponent as MusicLogo } from "./createPlaylistIcon.svg";
import Button from "@mui/material/Button";
import Form from "../../Component/Form";
import Search from "../../Component/Search";
import Card from "../../Component/Card";
import styled from "styled-components";
import { ColumnStyle } from "./style";
import millisToMinutesAndSeconds from "./timeMsConvert";

Modal.setAppElement("#root");

const Div = styled.div`
  justify-content: center;
  align-items: center;
`;

const CreatePlayList = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onSuccessSearch = (tracks) => {
    const selectedTracks = filterSelectedTracks();
    const searchDistincTracks = tracks.filter(
      (track) => !selected.includes(track.uri)
    );

    setTracks([...selectedTracks, ...searchDistincTracks]);
  };

  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selected.includes(uri)) {
      setSelected(selected.filter((item) => item !== uri));
    } else {
      setSelected([...selected, uri]);
    }
  };

  const filterSelectedTracks = () => {
    return tracks.filter((track) => selected.includes(track.uri));
  };

  return (
    <div>
      <Div className="home">
        <div>
          <div style={{ display: "flex" }}>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "rgb(36, 36, 36)",
                background: "rgb(36, 36, 36)",
              }}
              onClick={ToggleModal}
            >
              <MusicLogo />
            </Button>
            <h1>Create Playlist</h1>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={ToggleModal}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
              content: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "none",
                borderRadius: "2px",
                outline: "none",
                padding: "1px",
              },
            }}
          >
            <Form uriTracks={selected} />
            <Button variant="outlined" onClick={ToggleModal}>
              <b>close</b>
            </Button>
          </Modal>
          <br />
          <hr />
        </div>
        <Div className="search-bar">
          <Search onSuccess={(tracks) => onSuccessSearch(tracks)} />
        </Div>
        <div className={ColumnStyle}>
          {tracks.map((track) => (
            <div key={track.id}>
              <Card
                img={track.album.images[0].url}
                title={track.name}
                artist={track.artists[0].name}
                duration={millisToMinutesAndSeconds(track.duration_ms)}
                toggleSelect={() => toggleSelect(track)}
              />
            </div>
          ))}
        </div>
      </Div>
    </div>
  );
};

export default CreatePlayList;
