import React, { useState } from 'react';
import './App.css';
import UserRegistrationForm from './Components/UserRegistrationForm';
import GreenLightRedLight from './Components/GreenLightRedLight';

function App() {
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [isGameWon, setIsGameWon] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleGameStart = (difficulty, user) => {
    setGameDifficulty(difficulty);
    setIsGameWon(false)
    setUserData(user);
  };

  const handleGameEnd = (isWon) => {
    setIsGameWon(isWon);
  };

  return (
    <div className="App">
      <h1 className='main-heading'>Squid Game - <span className='green-color'>Green Light</span>, <span className='red-color'>Red Light</span></h1>
      {!gameDifficulty ? (
        <UserRegistrationForm onStartGame={handleGameStart} />
      ) : (
        <GreenLightRedLight difficulty={gameDifficulty} onGameEnd={handleGameEnd} user={userData}/>
      )}
      {isGameWon && <p></p>}
    </div>
    
  );
}

export default App;
