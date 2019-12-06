import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';
// import axios from 'axios';
import {avengers} from './Data';


const AvengersList = props => {
    const [heros, setHeros] = useState([])
    useEffect(()=>{
    //     const getAvengers = ()=>{
    // axios
    //     .get('https://www.marvel.com/characters')
    //     .then(res =>{
    //         console.log(res.data);
    //         setHeros(res.data);
    //     })
    //     .catch(err =>{
    //         console.error('Error:', err);
    //     })
    // }
    //     getAvengers();
        setHeros(avengers);
    }, []);

    return (
        <div className="hero-list">
            {heros.map(hero => (
                <Link to={`/heros/${hero.id}`}>
                    <HeroDetails key={hero.id} hero={hero} />
                </Link>
            ))}
        </div>
    );
}

function HeroDetails({ hero }) {
    const { name,nickname,img } = hero;
    return (

        <div className="movie-card">
            <h2>{name}</h2>
            <div className="movie-director">
                Nickname: <em>{nickname}</em>
            </div>
            <div className="hero-img">
                Pic: <strong>{img}</strong>
            </div>
            {/* {stars.map(star => (
                <div key={} className="movie-star">
                    {}
                </div>
            ))} */}
        </div>

    );
}

export default AvengersList;