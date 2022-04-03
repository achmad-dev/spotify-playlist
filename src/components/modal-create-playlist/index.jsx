import "./style.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Button from "../button";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const ModalPlaylist = ({ isOpen, onClose, createPlaylist, isLoading }) => {
  const [payload, setPayload] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlaylist(payload);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target && e.target.id === "modal") {
        return onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("click", handleClick);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);
  return (
    isOpen &&
    createPortal(
      <div id="modal" className='modal'>
        <div id="overlay" className='overlay' />
        <div className='modalContent'>
          <div className='header'>
            <h3 className='title'>Create playlist</h3>
            <button className='closeButton' onClick={() => onClose()}>
              <HighlightOffIcon />
            </button>
          </div>
          <div className='body'>
            <form id="createPlaylistForm" onSubmit={handleSubmit}>
              <div className='formControl'>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Input playlist name"
                  minlength="10"
                  onChange={handleChange}
                />
              </div>
              <div className='formControl'>
                <label htmlFor="description">Description</label>
                <textarea
                  rows={5}
                  id="description"
                  name="description"
                  placeholder="Input playlist description"
                  minlength="20"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className='footer'>
            <Button
              isLoading={isLoading}
              form="createPlaylistForm"
              leftIcon={<LibraryAddIcon />}
              style={{ marginLeft: "auto" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default ModalPlaylist;
