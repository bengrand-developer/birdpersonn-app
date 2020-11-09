import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CharacterDetail = (props) => {
    const id = props.match.params.id
    const [characterDetail, setCharacterDetail] = useState([]);

    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => setCharacterDetail(data));
    });

    return(
        <div style={{backgroundImage: `url(${characterDetail.image})`, backgroundRepeat: "no-repeat"}}>

            <p>name: {characterDetail.name}</p> <br/>
            <p>Status: {characterDetail.status}</p> <br/>                                                                                                                                                                                                                       
            <p>Gender: {characterDetail.gender}</p><br/>
            <p>Species: {characterDetail.species}</p><br/>


        </div>
    )
}

export default CharacterDetail;