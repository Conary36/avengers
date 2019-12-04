import React, {useState, setState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const [Heros, setHeros] = useState([])
function AvengersList(){
    axios
        .get('https://www.marvel.com/characters')
        .then(res =>{
            console.log(res.data);
            setHeros(res.data)
        })
        .catch(err =>{
            console.log('Error:', err);
        })

    return(

        render(){
        
            
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/avengers">Avengers</Link></li>
            </ul>
            {/* {this.Heros.map(h => <h1>{h.name}</h1>)} */}
                Heros.map(e =>{
                    return 
                })
                
            )
        }
        
           
    

    )
    
}
export default AvengersList;