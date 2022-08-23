import React from 'react';
import{Link, Route, Routes} from 'react-router-dom'
import FilmFavorite from './film';
import Food from './food';
import MusicFavorite from './music';
function FavoriteMe() {
    return (
        <div>
            <h2>apa yang aku sukai</h2>
            <Routes>
                <Route path="film" element={<FilmFavorite/>}/>
                <Route path="food" element={<Food/>}/>
                <Route path="music" element={<MusicFavorite/>} />
               
            </Routes>
        </div>
    );
}

export default FavoriteMe;