//import create portal
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import SpotifyButton from "../button";
import { FaSave, FaTimes } from "react-icons/fa";
//import styles from "./modal.module.css";
//make ModalPlaylist function with component
const ModalPlaylist = ({ isOpen, onClose, createPlaylist, isLoading }) => {
    //useState hook to store the payload
    const [payload, setPayload] = useState({
        name: "",
        description: "",
        public: false,
        collaborative: false,
    });
    //make a function to handle the change
    const handleChange = (e) => {
        //get the name and value of the target
        const { name, value } = e.target;
        //set the payload
        setPayload({ ...payload, [name]: value });
    };
    //make a function to handle the submit
    const handleSubmit = (e) => {
        //prevent the default behavior
        e.preventDefault();
        //create the playlist
        createPlaylist(payload);
    };
    //useEffect hook to handle the click
    useEffect(() => {
        //create a function to handle the click
        const handleClick = (e) => {
            //if the target is null or the target id is modal
            if (e.target && e.target.id === "modal") {
                //return onClose
                return onClose();
            }
        };
        //if isOpen is true
        if (isOpen) {
            //set the body overflow to hidden
            document.body.style.overflow = "hidden";
            //add an event listener to the window
            window.addEventListener("click", handleClick);
        }
        //return a function to remove the event listener
        return () => {
            //set the body overflow to unset
            document.body.style.overflow = "unset";
            //remove the event listener
            window.removeEventListener("click", handleClick);
        };
    }, [isOpen, onClose]);

   //return the modal
   return (
    isOpen &&
    createPortal(
      <div id="modal" className={style.modal}>
        <div id="overlay" className={style.overlay} />
        <div className={style.modalContent}>
          <div className={style.header}>
            <h3 className={style.title}>Create playlist</h3>
            <SpotifyButton className={style.closeButton} onClick={() => onClose()}>
              <FaTimes />
            </SpotifyButton>
          </div>
          <div className={style.body}>
            <form id="createPlaylistForm" onSubmit={handleSubmit}>
              <div className={style.formControl}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Input playlist name"
                  minLength="10"
                  onChange={handleChange}
                />
              </div>
              <div className={style.formControl}>
                <label htmlFor="description">Description</label>
                <textarea
                  rows={5}
                  id="description"
                  name="description"
                  placeholder="Input playlist description"
                  minLength="20"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className={style.footer}>
            <Button
              isLoading={isLoading}
              form="createPlaylistForm"
              leftIcon={<FaSave />}
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

//export the modal
export default ModalPlaylist;