import React from 'react'
import songData from '../data/songData'
import { useDispatch } from 'react-redux'
import { selectedSong } from '../redux/features/song/songSlice';

const SongList = () => {
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Song List</h1>
        <ul>
            {
                songData.map((song) => (
                    <li key={song.id} onClick={()=>dispatch(selectedSong(song))}>
                        <h3>{song.name}</h3>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SongList