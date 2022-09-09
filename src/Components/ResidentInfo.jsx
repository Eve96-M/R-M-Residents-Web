import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentInfo = ({ url }) => {
    /*states*/

    const [resident, setResident] = useState({})

    /*Axios Call*/

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])

    return (
        <div className="ResidentBox">
            <img src={resident.image} alt="" />
            <ul>
                <li><span>Name:</span>{" "}{resident.name}</li>
                <li><span>Status:</span>{" "}{resident.status}</li>
                <li><span>Origin:</span>{" "}{resident.origin?.name}</li>
                <li><span>Episodes where appear:</span>{" "}{resident.episode?.length}</li>
            </ul>
        </div>
    );
};

export default ResidentInfo;