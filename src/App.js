import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route} from "react-router-dom";
import './App.css';
import Home from './Components';
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <>
    <CssBaseline />
    <Route exact path="/" component={Home} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Portfolio" component={Portfolio} />
    <Route path="/Contacts" component={Contacts} />
    </>
  );
}

export default App;
