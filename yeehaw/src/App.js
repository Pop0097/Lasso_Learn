import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import FeaturedUsers from "./pages/FeaturedUsers"
import Landing from "./pages/Landing"
import Account from "./pages/Account";
import Search from './pages/Search';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Landing />
        ) : (
          <>
          <Header /> 
          <br />
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={FeaturedUsers}/>
              <Route path="/account" component={Account} />
              <Route path ="/search" component={Search} />
            </Switch>            
          </div>
          </>
        )
        }
      </Router>
    </div>
  );
}

export default App;
