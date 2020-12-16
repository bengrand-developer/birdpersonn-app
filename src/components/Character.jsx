import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Character.css";

const Character = ({ character, onClick }) => {
  return (
    <div className="Character">
      <Link to={`/character/${character.id}`}>{character.name}</Link>
      <img src={character.image} alt="character" />
      <button className="btn" onClick={onClick}>
        Add to favorites
      </button>
    </div>
  );
};

export default Character;
