import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


const AvengersList = props => {
    const [heros, setHeros] = useState([])
    useEffect(()=>{
        const getAvengers = ()=>{
    axios
        .get('https://www.marvel.com/characters')
        .then(res =>{
            console.log(res.data);
            setHeros(res.data);
        })
        .catch(err =>{
            console.error('Error:', err);
        })
    }
        getAvengers();

    }, []);

    return (
        <div className="hero-list">
            {heros.map(hero => (
                <Link to={`/heros/${hero.id}`}>
                    <HeroDetails key={hero.id} heros={hero} />
                </Link>
            ))}
        </div>
    );
}

function HeroDetails({ hero }) {
    const { title, director, metascore, stars } = hero;
    return (

        <div className="movie-card">
            <h2>{}</h2>
            <div className="movie-director">
                Director: <em>{}</em>
            </div>
            <div className="movie-metascore">
                Metascore: <strong>{}</strong>
            </div>
            <h3>Actors</h3>

            {/* {stars.map(star => (
                <div key={} className="movie-star">
                    {}
                </div>
            ))} */}
        </div>

    );
}

export default AvengersList;