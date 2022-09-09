import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
const LocationRM = () => {
    /*states*/

    const [location, setLocation] = useState({})
    const [typeID, setTypeID] = useState('')

    /*Axios Call*/

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 127)
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setLocation(res.data))
    }, [])

    /*Functions*/

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeID}`)
            .then(res => setLocation(res.data))
    }

    return (
        <div className="LocationBox">
            <img src="https://i.ytimg.com/vi/kWFZQBUFWkc/maxresdefault.jpg" className="Cover" alt="" />
            <h1 className="title">Rick & Morty Dimensions</h1>
            <input type="text" className="Search-Bar" value={typeID} onChange={(e) => setTypeID(e.target.value)} />
            <button className="btn" onClick={searchType}>Search</button>
            <h2 className="subTitle">{location.name}</h2>
            <div className="dimension-info">
                <ul>
                    <li><small>Type</small> <br />{location.type}</li>
                    <li><small>Dimension</small> <br />{location.dimension}</li>
                    <li><small>Residents</small><br />{location.residents?.length}</li>
                </ul>
            </div>
            <div className="container">
            {
                location.residents?.map(residents => (<ResidentInfo url={residents} key={residents} />))
            }
            </div>
        </div>
    );
};

export default LocationRM;