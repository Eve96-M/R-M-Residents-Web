import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
import cover from '../assets/image/coverRM.gif'
const LocationRM = ({ location, setLocation }) => {
    /*states*/
    const [locations, setLocations] = useState([])
    const [showList, setShowList] = useState(false)
    let [value, setValue] = useState('Type Id')

    /*Functions*/

    const searchType = (e) => {
        const typeID = e.target.id
        const valueKey = e.target.accessKey
        axios.get(`https://rickandmortyapi.com/api/location/${typeID}`)
            .then(res => setLocation(res.data))
            .then(() => setShowList(false))
        setValue(valueKey)
    }

    const filterLocation = (e) => {
        if (e.target.value === '') {
            setLocations([])
            setShowList(false)
        } else {
            axios.get(`https://rickandmortyapi.com/api/location/?name=${e.target.value}`)
                .then(res => setLocations(res.data.results))
                .finally(() => setShowList(true))
        }
    }



    return (
        <div className="LocationBox">
            <img src={cover} className="Cover" alt="" />
            <h1 className="title">Rick & Morty Dimensions</h1>
            <div className="LocationBox">
                <input type="text" className="Search-Bar" onChange={(e) => filterLocation(e)} placeholder={value} />
                {
                    showList && (
                        <ul className='list-id'>
                            {

                                locations.map(locationNow => (
                                    <li id={locationNow.id} accessKey={locationNow.name} className='element-id' key={locationNow.name} onClick={e => searchType(e)}>Episode {locationNow.name}</li>
                                ))
                            }
                        </ul>
                    )
                }
                {/* <button className="btn" onClick={searchType}>Search</button> */}
            </div>
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