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
import RegisterPage from './pages/Register';
import User from './pages/User';
import { RequireAuth } from './util/Navigation/RequireAuth';

function App() {
	return (
		<div className="App">
			<Router>
				<div className='container'>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route
							path="/"
							element={
								<RequireAuth>
									<Home />
								</RequireAuth>
							}
						/>
						<Route
							path='user/:useName'
							element={
								<RequireAuth>
									<User />
								</RequireAuth>
							}
						/>
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
