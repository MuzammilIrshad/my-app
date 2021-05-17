import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from './features/counter/Cart';
import Nav from './features/counter/Navbar';
//import { Navbar } from 'react-bootstrap';

function App() {
  return (
      <div className="App">
         
          <Router>
              <Nav />
          <Switch>
                  <Route path="/cart">
                      <Cart />
              </Route>
              <Route path="/">
                  <Counter />
              </Route>
             
              </Switch>
          </Router>
    </div>
  );
}

export default App;
