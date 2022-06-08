/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getAlbums, getTracks } from '../script';
import buttonPlay from '../images/buttonPlay.svg'
import Box from './Box';
import '../App.css';

const Main = () => {
   let [albums, setAlbums] = useState([]);
   let [tracklist, setTracklist] = useState([]);
   let [pending, setPending] = useState(false)
   let [openBox, setOpenBox] = useState(false);

   const setTracks = async (id) => {
      setPending(true);
      let result = await getTracks(id);
      setTracklist(result);
      setOpenBox(true);
      setPending(false);
   }

   useEffect(async () => {
      let result = await getAlbums();
      let data = result.albums.items;
      setAlbums(data);
   }, []);

   return (
      <main class="main">
    <div class="main__new">
       <h2 class="main__title">Новинки</h2>
       <div class="main__playlists">
          {albums.map(item => (
             <div class="main__item" key={item.id}>
                <img
                   src={item.images[1].url}
                   onClick={!pending && (() => { setTracks(item.id) })}
                   class="playlist__image" />
                <div class="playlist__play">
                   <img src={buttonPlay} alt="" class="play" />
                </div>
                <h3 class="playlist__title">{item.name}</h3>
                <p class="playlist__description">Исполнитель: {item.artists[0].name}</p>
             </div>
          ))}
       </div>
    </div>

         {openBox && <Box tracklist={tracklist} setOpenBox={setOpenBox} />}
      </main>
   )
}

export default Main;