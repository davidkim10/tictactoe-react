import React from 'react';
import { Board } from './components';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.scss';

const Home = () => {
  return (
    <>
      <img src={logo} alt="tic-tac-toe" style={{ maxWidth: '200px' }} />
      <h1>Tic-Tac-Toe!</h1>
      <Link className="link" to="/play">
        ready to play?
      </Link>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/play" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
