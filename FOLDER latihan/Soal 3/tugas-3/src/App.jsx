import{Link, Route, Routes} from 'react-router-dom'
import './App.css';
//halaman import favorite
import FilmFavorite from './favorite/film';
import Food from './favorite/food';
import MusicFavorite from './favorite/music';

//halaman
import Gallery from './galeri/Galeri';
import Home from './home/Home';

//user
import User from './user/User';
import Setting from './user/setting/Setting';
import Profile from './user/profile/Profile';
import Favorite from './favorite/Favorite';

function App() {
  return (
   <>
  <Link to="/">Home</Link>
  <Link to="/user">User</Link>
  <Link to="favorite">FavoriteKu</Link>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/user/" element={<User/>}/>
    <Route path="/user/profle" element={<Profile/>}/>
    <Route path="/user/setting" element={<Setting/>}/>
    <Route path="/favorite/" element={<Favorite/>} />
    <Route path="/favorite/film" element={<FilmFavorite/>} />
    <Route path="/favorite/music/" element={<MusicFavorite/>} />
    <Route path="/favorite/Food" element={<Food/>} />
  </Routes>







   </>
  );
}

export default App;
