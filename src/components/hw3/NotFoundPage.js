import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const NotFoundPage = () => {
	return (
		<React.Fragment>
		  <Header />
		  Page not found. goto <Link to='/dashboard'>Homepage</Link>
		</React.Fragment>
	);
};

export default NotFoundPage;
