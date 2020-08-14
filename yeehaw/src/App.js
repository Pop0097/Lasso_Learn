import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from "./pages/Home"
import Landing from "./pages/Landing"

function App() {
  //React Context API --> user state
  const [user, setUser] = useState()
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Landing />
        ) : (
          <>
          <Header />
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home}/>
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
