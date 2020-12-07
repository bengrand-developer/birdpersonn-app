import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";

const Character = ({ character }) => {
  return (
    <div className="Character">
      <Link to={`/character/${character.id}`}>{character.name}</Link>
      <img src={character.image} alt="character" />
    </div>
  );
};

export default Character;
