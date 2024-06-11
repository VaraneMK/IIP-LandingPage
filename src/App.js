import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultPage from './components/DefaultPage/DefaultPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ServicePage from './components/ServicePage/ServicePage';

function App() {
	return (
		<div className="app">
			<Routes>
				<Route
					path="/"
					element={<DefaultPage />}
				/>
				<Route
					path="/service/:id"
					element={<ServicePage />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
