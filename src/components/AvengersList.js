import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import '../App.css';
// // import axios from 'axios';
// import {avengers} from './data';
import PropTypes from 'prop-types';


function AvengersList (props){
    // const [heros, setHeros] = useState([])
    // useEffect(()=>{
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
        // setHeros(avengers);
    // }, []);


    return (
        <div className="characters-list-wrapper">
            {props.avengersList.map(avengers => (
                <div className="character-card" key={avengers.id}>
                    <img src={avengers.thumbnail} alt={avengers.name} />
                    <h3
                        onClick={() => props.history.push(`/avengers/${avengers.id}/info`)}
                    >
                        {avengers.name}
                    </h3>
                    <p>({avengers.nickname})</p>
                </div>
                // <Link to={`/heros/${hero.id}`}>
                //     <HeroDetails key={hero.id} hero={hero} />
                // </Link>
            ))}
        </div>
    );
}
AvengersList.propTypes = {
    avengersList: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
};


// function HeroDetails({ hero }) {
//     const { name,nickname,img } = hero;
//     return (

//         <div className="movie-card">
//             <h2>{name}</h2>
//             <div className="movie-director">
//                 Nickname: <em>{nickname}</em>
//             </div>
//             <div className="hero-img">
//                 Pic: <strong>{img}</strong>
//             </div>
//             {/* {stars.map(star => (
//                 <div key={} className="movie-star">
//                     {}
//                 </div>
//             ))} */}
//         </div>

//     );
// }

export default AvengersList;