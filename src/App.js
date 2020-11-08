import React from 'react';
import './App.css';
import SideBar from './Components/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'


function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Switch>
          {/* add the routes to the pages */}
          <Route path="/" exact component={Home}/>
          <Route path="/aboutMe" exact component={AboutMe}/>
          
        </Switch>
      </Router>

    </>
  );
}

export default App;
