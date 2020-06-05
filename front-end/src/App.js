import React from 'react';
import './App.css'

import Nav from './components/Nav';
import AddChallege from './components/AddChallege';
import { ChallegeProvider } from './components/ChallegeContext';
import { ProjectResponseProvider } from './components/projectResponses/ProjectResponseContext';
import HomeTitle from './components/HomeTitle'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectResponseList from './components/projectResponses/ProjectResponseList';
import CommentList from './components/CommentsPage/CommentList';
import { CommentProvider } from'./components/CommentsPage/CommentContext';


function App() {
  return (
    <Router>
      <ProjectResponseProvider>
      <ChallegeProvider>
      <CommentProvider>
        <div className='App'>
            <Nav />
            <Switch>
              <Route path='/' exact component={HomeTitle} />
              <Route path='/project-response-list' component={ProjectResponseList} />
              <Route path='/comments-list' component={CommentList} />      
            </Switch>
        </div>
      </CommentProvider>
      </ChallegeProvider>
      </ProjectResponseProvider>

    </Router>
  );
}

export default App;
