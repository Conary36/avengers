import React from 'react';
import { Route, Link} from 'react-router-dom';
import '../App.css';

function Home(props) {
  return <h1>Home Component</h1>;
}
function About(props) {
  return <h1>About Component</h1>;
}
function Contact(props) {
  return <h1>Contact Component</h1>;
}

function HomeAvenge(){

    return (
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </nav>
    );
}
export default HomeAvenge;