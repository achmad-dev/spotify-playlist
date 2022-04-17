import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addTracksToPlaylist, createPlaylist } from '../../lib/fetchApi';
import { Div, Text, Button, Input } from './formStyled';


const sendFormNetworkCall = (data) => console.log(data);

const Form = ({  uriTracks }) =>{
   const accessToken = useSelector((state)=>state.auth.accessToken);
   const userId = useSelector((state) => state.auth.user.id);
   const [form, setForm] = useState({
        title:'',
        description:''
    });


    const handleForm = async (e) =>{
        e.preventDefault();
        sendFormNetworkCall(form);

        try {
            const responseCreatePlaylist = createPlaylist(accessToken, userId, {
              name: form.title,
              description: form.description,
            });
    
            addTracksToPlaylist(accessToken, responseCreatePlaylist.id, uriTracks);
    
            alert('Playlist created successfully');
    
            setForm({ title: '', description: '' });
          } catch (error) {
            alert('error');
          }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({...form, [name]:value});
        console.log(form);
    };


    return(
        <form className="form" onSubmit={handleForm}>
            <Div className="form__content">
                <div className="form__header">
                    <Text className="form__title">Create Playlist</Text>
                </div>
                <div className="form__body">
                    <div className="title">
                        <Text htmlFor="title">Title</Text>
                        <Input
                            className='input'
                            minLength={10}
                            type="text" 
                            name='title' 
                            value={form.title} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="desc">
                        <Text htmlFor="description">Description</Text>
                        <Input
                            className='input'
                            type="text" 
                            name='description' 
                            value={form.description} 
                            onChange={handleChange}  
                        />
                    </div>
                </div>
                <div className="form__footer">
                    <Button className="submit">Create</Button>
                </div>
            </Div>
        </form>
    );

}

export default Form;