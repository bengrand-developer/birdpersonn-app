import React, { useEffect, useState } from 'react';
import Character from './Character';

import Axios from 'axios';

const CharacterList =() => {

    const [characterList, setCharaterList]= useState([]);

    useEffect(() => {
        Axios.get("https://rickandmortyapi.com/api/character/")
        .then(response => response.data.results)
        .then(data => setCharaterList(data));
    });
    return(
        <div>
             {characterList.map((character) => (
                 <Character key={character.id} character={character} />
             ))}
             
        </div>
    )
}

export default CharacterList;