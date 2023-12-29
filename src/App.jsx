// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio.jsx';
import './App.css';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Coursework from './components/Coursework';

function App() {
	return (
		<div className="overflow-hidden bg-gradient-to-b from-white via-blue-200 via-sky-200 to-blue-300">
			<div className="App">
				<Header />
				<About />
				<Coursework />
				<Portfolio />
				<Timeline />
				<Footer />
			</div>
		</div>
	);
}

export default App;
