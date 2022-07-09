import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import User from './pages/User';

function App() {
	return (
		<div className="App">
			<Router>
				<div className='container'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LoginPage />} />
						<Route
							path='user/:useName'
							element={<User />}
						/>
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
