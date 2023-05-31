// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio.jsx';
import './App.css';
import Footer from './components/Footer';

function App() {
	return (
		<div className="bg-orange-50">
			<div className="App">
				<Header />
				<About />
				<Portfolio />
				<Footer />
			</div>
		</div>
	);
}

export default App;
