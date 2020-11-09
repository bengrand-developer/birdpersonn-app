import React from 'react';
import { Link } from "react-router-dom"

const Character = ({character}) => {

    
    return(
        
        <div className='Character'>
            <Link to={`/character/${character.id}`} >
                {character.name}
                </Link>
            <img src={character.image} />
           
        </div>
    )
}

export default Character;