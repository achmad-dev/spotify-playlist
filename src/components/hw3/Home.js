import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './header';

const Home = (props) => {
	return (
		<div className='login'>
		 <Header />
		 <Button variant='info' type='submit' onClick={handleLogin}>
		   login to spotify plz
		 </Button>
		</div>
	);
};


const REACT_APP_CLIENT_ID = "8852aac346124e4ebe13046bd708fefb";
const REACT_APP_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
const REACT_APP_REDIRECT_URL = "http://localhost:3000/redirect";

const handleLogin = () => {
  window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
};


export default connect()(Home);
