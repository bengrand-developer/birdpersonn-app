import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Character.css";

const Character = ({ character }) => {
  const [favorite, setFavorite] = useState([]);

  const addFavorites = (character) => {
    if (favorite.some((fav) => fav.id === character.id)) {
      setFavorite([...favorite, character]);
    }
  };

  return (
    <div className="Character">
      <Link to={`/character/${character.id}`}>{character.name}</Link>
      <img src={character.image} alt="character" />
      <button
        className="btn"
        onClick={() => console.log(addFavorites(character.id))}
      >
        Add to favorites
      </button>
    </div>
  );
};

export default Character;
