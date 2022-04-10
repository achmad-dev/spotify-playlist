import React, { useContext } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylistStart } from '../../containers/Playlists/playlistsActions';
// styles
/*import {
  ModalContainer,
  ModalDialog,
  ModalCross,
  ModalTitle,
  ModalLabel,
  ModalInputTitle,
  ModalInput,
  ModalButtonOutline,
  ModalButton,
  ModalCrossContainer,
  ModalButtonsContainer,
  ModalButtonOutlineText,
} from './createPlaylistStyles'; */
import {Form, Button, InputTitle, Input , Div} from './createPlaylistStyles';
import { ModalsContext } from '../ModalsContext/ModalsContextContainer';
//<ModalButtonsContainer>
//<ModalButtonOutline
//onClick={() => createPlaylist.setIsVisible(false)}
//>
//<ModalButtonOutlineText>Cancel</ModalButtonOutlineText>
//</ModalButtonOutline>
const CreatePlaylist = () => {
  const { user } = useSelector(({ auth }) => auth);

  const [value, setValue] = React.useState('');

  const dispatch = useDispatch();

  const { createPlaylist } = useContext(ModalsContext);

  const handleCreatePlaylist = async () => {
     dispatch(
      createPlaylistStart({ userId: user?.id, name: value || 'New playlist' })
    );

    createPlaylist.setIsVisible(false);
  };

  return createPlaylist.isVisible ? (
    <div className='form'>
    <Form>
            <div className="form__content">
                <div className="form__header">
                    <title className="form__title">Create Playlist</title>
                    <h2 className='title'>Create Playlist</h2>
                </div>
                <div className="form__body">
                    <Div className="title">
                        <InputTitle htmlFor="title"><strong><b>Title</b></strong></InputTitle>
                        <Input
                            className='input'
                            minLength={10}
                            type="text" 
                            name='title' 
                            onChange={e => setValue(e.target.value.trim())}
                            required 
                        />
                    </Div>
                    <Div className="desc">
                        <InputTitle htmlFor="description"><strong><b>Description</b></strong></InputTitle>
                        <Input
                            className='input'
                            type="text" 
                            name='description' 
                            onChange={e => setValue(e.target.value.trim())}  
                        />
                    </Div>
                </div>
                <div className="form__footer">
                    <Button className='cancel' onClick={() => createPlaylist.setIsVisible(false)}>Cancel</Button>
                    <Button className="submit" onClick={handleCreatePlaylist}>Create</Button>
                </div>
            </div>
        </Form>
    </div>
  ) : null;
};

export default CreatePlaylist;
