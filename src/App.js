import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import HomeAvenge from './components/Home';
import AvengersList from './components/AvengersList';
import Avengers from "./components/Avengers";



function App() {


  return (
    function App() {
      return (
        <div className="App">
          <ul className="navbar">
            <li>
              <NavLink exact to="/" activeClassName="activeNavButton">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/avengers" activeClassName="activeNavButton">
                Avengers
              </NavLink>
            </li>
          </ul>
          <Route exact path="/" component={HomeAvenge} />
          <Route
            exact
            path="/avengers"
            render={props => (
              <AvengersList {...props} avengersList={Avengers} />
            )}
          />
          <Route
            path="/avengers/:avengerId"
            render={props => (
              <Avengers {...props} avengersList={Avengers} /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
            )}
          />
        </div>
      );
    }
  
  );
}

export default App;
