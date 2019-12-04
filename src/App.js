import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeAvenge from './components/Home';
import AvengersList from './components/AvengersList';
import {BrowserRouter as Router} from 'react-router-dom';

function Home(props){
  return <h1>Home Component</h1>;
}
function About(props){
  return <h1>About Component</h1>;
}
function Contact(props){
  return <h1>Contact Component</h1>;
}

function App() {
  return (
    
    <div className="App">
      <HomeAvenge/>
      <header className="App-header">
      <BrowserRouter>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          {/* <Link to='/avengers'>AvengersList</Link> */}


          <Route exact path='/' component={Home} />
          <Route path='/about'component={About}/>
          <Route path='/contact'component={Contact}/>
          {/* <Route path='/avengers'component={AvengersList}/> */}
       </BrowserRouter>
      </header>
    </div>
  
  );
}

export default App;
