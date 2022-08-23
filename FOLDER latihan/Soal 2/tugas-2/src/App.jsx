import{ Route, Routes,} from 'react-router-dom'
import './App.css';
import Artis from './daftar Artis/Artis';




function App() {
  let daftarArtis=[
    {name:'Marsel pesulap Merah',id:1},
    {name:'sule',id:2},
    {name:'Indra firmansyah',id:3},
    {name:'regi Miawaug',id:4},
    {name:'Kimi Hime',id:5},
    {name:'Windah Basudara',id:6},
    {name:'Alok',id:7},
    {name:'Rimuru',id:8},
    {name:'Jordy',id:9},
    {name:'Ayah ku',id:10},
    {name:'Reka',id:11},
    {name:'Zaki',id:12},
    {name:'Nikita Mirzani',id:13},
    {name:'Michle Jackson',id:14},
    {name:'lil Nas',id:15},


]

  return (
   <>
  
   {
    daftarArtis.map((item)=>
    <div><a href={"/daftarArtis"+ item.id}></a></div>)
   }
   </>
  );
}

export default App;
