import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Loader from './Components/Loader'
import LocationRM from './Components/LocationRM'
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
          <LocationRM location={location} setLocation={setLocation}/>
        )
      }
    </div>
  )
}

export default App
