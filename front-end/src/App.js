import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import AddChallege from "./components/challengesPage/AddChallege";
import { ChallegeProvider } from "./components/challengesPage/ChallegeContext";
import { ProjectResponseProvider } from "./components/projectResponses/ProjectResponseContext";
import HomeChallenges from "./components/challengesPage/HomeChallenges";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectResponseList from "./components/projectResponses/ProjectResponseList";
import CommentList from "./components/CommentsPage/CommentList";
import { CommentProvider } from "./components/CommentsPage/CommentContext";
import LoginForm from "./components/LoginForm.js";
import SignUpForm from "./components/SignUpForm.js";

function App() {
  return (
    <Router>
      <ProjectResponseProvider>
        <ChallegeProvider>
          <CommentProvider>
            <div className="App">
              <Nav />
              <Switch>
                <Route path="/" exact component={HomeChallenges} />
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignUpForm} />
                <Route
                  path="/project-response-list"
                  component={ProjectResponseList}
                />
                <Route path="/comments-list" component={CommentList} />
              </Switch>
            </div>
          </CommentProvider>
        </ChallegeProvider>
      </ProjectResponseProvider>
    </Router>
  );
}

export default App;
