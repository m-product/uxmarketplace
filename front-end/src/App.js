import React from 'react';
import './App.css'

import Nav from './components/Nav';
import AddChallege from './components/AddChallege';
import { ChallegeProvider } from './components/ChallegeContext';
import { ProjectResponseProvider } from './components/projectResponses/ProjectResponseContext';
import HomeTitle from './components/HomeTitle'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectResponseList from './components/projectResponses/ProjectResponseList';



function App() {
  return (
    <Router>
      <ProjectResponseProvider>
      <ChallegeProvider>
        <div className='App'>
            <Nav />
            <Switch>
              <Route path='/' exact component={HomeTitle} />
              <Route path='/project-response-list' component={ProjectResponseList} />      
            </Switch>
        </div>
      </ChallegeProvider>
      </ProjectResponseProvider>

    </Router>
  );
}

export default App;
