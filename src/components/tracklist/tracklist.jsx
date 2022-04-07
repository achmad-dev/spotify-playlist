import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { usePlaylist } from "../../utils/playlist";
import SpotifyButton from "../button/button";
import ModalPlaylist from "../modal-create-playlist";
import MusicCard from "../music-card";
import toast from "react-hot-toast";
import { Auth } from "../../utils/auth";
import { useTracklist } from "../../utils/Tracklist";
import { useDispatch } from "react-redux";
import { clearList, storeTracklist } from "../../store/tracklist";
import { getTopTracks } from "../../utils/spotify";
//make Playlist function with component
const Playlist = () => {
    // abstract out the data we want to use
    const {
        selectedTrack,
        checkSelected,
        handleSelect,
        createPlaylist,
        isLoading,
    } = usePlaylist();

    // abstract out the auth data we want to use
    const { isAuthenticated, accessToken, user: { id: user_id } } = Auth();

    // dispatch hook
    const dispatch = useDispatch();
    // abstract out the tracklist data we want to use
    const { tracklist } = useTracklist();
    // abstract out the state we want to use
    const [isModalOpen, setModalOpen] = useState(false);
    //check if the tracklist is empty
    const isEmpty = selectedTrack.length === 0;

    //make a function to handle the create playlist
    const handleCreatePlaylist = (payload) => {
        //check if the user is authenticated
        if (isAuthenticated) {
            //if the user is authenticated, create the playlist
            createPlaylist(accessToken, user_id, payload).then(() => {
                //close the modal
                setModalOpen(false);
                //show a success toast
                toast.success("Successfully created!", {
                    duration: 4000,
                    style: {
                        background: "#333",
                        color: "#fff",
                    },
                });
            });
        }
    };

    //useEffect hook to get the top tracks
    useEffect(() => {
        //check if the user is authenticated
        if (isAuthenticated) {
            //if the user is authenticated, get the top tracks
            getTopTracks(accessToken).then((data) => {
                //store the tracklist in the store
                dispatch(storeTracklist(data.items));
            });
        }
        //clear the tracklist in the store
        return () => {
            dispatch(clearList());
        };
    }, [dispatch, isAuthenticated, accessToken]);

    //return the component
    return (
        <div className="playlistContainer">
            {/* map through the tracklist */}
            {tracklist.map((music) => (
                <MusicCard
                    key={music.id}
                    data={music}
                    handleSelect={handleSelect}
                />
            ))}
            {/* render the modal */}
            <ModalPlaylist
                isOpen={isModalOpen}
                handleClose={() => setModalOpen(false)}
                handleCreatePlaylist={handleCreatePlaylist}
                isLoading={isLoading}
                onClose={() => setModalOpen(false)}
            />
            {/* check isAuth and is empty */}
            {isAuthenticated && isEmpty && (
                <div style={{ position: "fixed", bottom: 18, right: 18 }} className="playlistButton">
                    <SpotifyButton
                        leftIcon={<Icon name="plus" />}
                        text="Create Playlist"
                        onClick={() => setModalOpen(true)}
                    >
                        Create Playlist
                    </SpotifyButton>
                </div>
            )}
        </div>
    );
};
//export the component
export default Playlist;
