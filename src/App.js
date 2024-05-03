import React from 'react'
import Counter from './Components/Counter'
import SongList from './Components/SongList'
import SongDisplay from './Components/SongDisplay'

const App = () => {
  return (
    <div>
      <Counter />
      <hr/>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <SongList />
        <SongDisplay />
      </div>
    </div>
  )
}

export default App