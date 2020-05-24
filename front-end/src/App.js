import React from 'react';
import './App.css'

import Nav from './components/Nav';
import ChallengeList from './components/ChallengeList';
import AddChallege from './components/AddChallege';
import { ChallegeProvider } from './components/ChallegeContext';
import HomeTitle from './components/HomeTitle'





function App() {
  return (
    <ChallegeProvider>
      <div className='App'>
          <Nav />
          <HomeTitle />
          <ChallengeList />
      </div>
    </ChallegeProvider>
    
  );
}

export default App;
