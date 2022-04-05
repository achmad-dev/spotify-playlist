import { useState } from "react";
import AddCardIcon from '@mui/icons-material/AddCard';
import { usePlaylist } from "../../lib/usePlaylist";
import Button from "../button";
import ModalPlaylist from "../modal-create-playlist";
import MusicCard from "../music-card";
import toast from "react-hot-toast";
import SpotifyPlayer from 'react-spotify-web-playback';

const Playlist = ({ data, userData }) => {
  const {
    selectedTrack,
    checkSelected,
    handleSelect,
    createPlaylist,
    isLoading,
  } = usePlaylist();
  const isEmpty = selectedTrack.length === 0;
  const isAuthenticated = userData?.access_token !== undefined;
  const [isModalOpen, setModalOpen] = useState(false);
  const { access_token, id: user_id } = userData;

  const handleCreatePlaylist = (payload) => {
    isAuthenticated &&
      createPlaylist(access_token, user_id, payload).then(() => {
        setModalOpen(false);
        toast.success("Successfully created!", {
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <div className="playlistContainer">
      {data.map((music) => (
      <>
        <MusicCard
          key={music.id}
          data={music}
          handleSelect={handleSelect}
          isSelected={checkSelected(music.uri)}
        />
        <SpotifyPlayer token={access_token} uris={music.uri} styles={{
    activeColor: '#fff',
    bgColor: 'black',
    color: 'white',
    loaderColor: '#fff',
    sliderColor: '#1cb954',
    trackArtistColor: 'white',
    trackNameColor: 'white',
  }} />
      </>
      ))}

      <ModalPlaylist
        isLoading={isLoading}
        createPlaylist={handleCreatePlaylist}
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      {isAuthenticated && !isEmpty && (
        <div style={{ position: "fixed", bottom: 18, right: 18 }}>
          <Button
            leftIcon={<AddCardIcon />}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Create playlist
          </Button>
        </div>
      )}
    </div>
  );
};

export default Playlist;
