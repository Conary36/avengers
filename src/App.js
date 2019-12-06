import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeAvenge from './components/Home';
import AvengersList from './components/AvengersList';





function App() {

  return (
    
    <div className="App">
      <HomeAvenge/>
      <header className="App-header">
      <BrowserRouter>
          <Link to='/avengers'>AvengersList</Link>
          <Route path='/avengers'component={AvengersList}/>
       </BrowserRouter>
      </header>
    </div>
  
  );
}

export default App;
