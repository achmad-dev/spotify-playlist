import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/hw3/Home';
import RedirectPage from '../components/hw3/redirectPage';
import Dashboard from '../components/hw3/Dashboard';
import NotFoundPage from '../components/hw3/NotFoundPage';

class AppRouter extends React.Component {
	render() {
		return (
			<BrowserRouter>
			 <div className='main'>

			     <Route path='/' component={Home}/>
			     <Route path='/redirect' component={RedirectPage}/>
			     <Route path='/dashboard' component={Dashboard}/>
			     <Route component={NotFoundPage}/>
			   
			 </div>
			</BrowserRouter>
		);
	}
}
export default AppRouter;
