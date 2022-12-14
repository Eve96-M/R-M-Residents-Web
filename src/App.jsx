import ReactPlayer from 'react-player'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Loader from './Components/Loader'
import LocationRM from './Components/LocationRM'
import intro from './assets/sounds/intro.mp3'

function App() {
  const [location, setLocation] = useState({})
  const [loader, setLoader] = useState(true)

  /*Axios Call*/

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 127)
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => {
        console.log(res.data);
        setLocation(res.data)
        setLoader(false)
      })
  }, [])


  return (
    <div className="App">
      {
        loader ? (
          <Loader />
        ) : (
          <>
            <LocationRM location={location} setLocation={setLocation} />
            <ReactPlayer
              url={intro}
              volume={.02}
              controls
              playing
              loop
              height={'0px'}
              width={'0px'}
            />
          </>
        )
      }
    </div>
  )
}

export default App
