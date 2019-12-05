import React from 'react';
import { Route, Link} from 'react-router-dom';
import '../App.css';


function HomeAvenge(){
    function Home(props) {
        return <h1>Home Component</h1>;
    }
    function About(props) {
        return <h1>About Component</h1>;
    }
    function Contact(props) {
        return <h1>Contact Component</h1>;
    }

    return(

        <header>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            
        </header>
    )
}
export default HomeAvenge;