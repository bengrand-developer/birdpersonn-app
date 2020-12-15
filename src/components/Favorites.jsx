import { get } from "lodash";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const getFavoritesCharacter = localStorage.getItem("addToFavorites");
  console.log(getFavoritesCharacter);

  const [favorites, setFavorites] = useState(getFavoritesCharacter());

  useEffect(() => {
    localStorage.setItem("addToFavorites", JSON.stringify(favorites));
  }, [favorites]);

  return <div></div>;
};

export default Favorites;
