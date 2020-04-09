import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Homepage from './components/homepage/Homepage'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Homepage}></Route>
        </Switch>
      </div>
    </ BrowserRouter>
  );
}

export default App;
