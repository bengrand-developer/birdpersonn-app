import React, { useEffect, useState } from "react";
import Character from "./Character";
import Load from "./Load";
import "./CharacterList.css";
import Searchbar from "./Searchbar";

import Axios from "axios";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    setLoading(true);
    if (searchCharacter.length) {
      Axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchCharacter}`
      )
        .then((response) => response.data.results)
        .then((data) => setCharacterList(data))
        .catch((err) => console.log("err"))
        .finally(() => {
          setLoading(false);
        });
    } else {
      Axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      )
        .then((response) => response.data.results)
        .then((data) => setCharacterList(data))
        .catch((err) => console.log("err"))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentPage, searchCharacter]);

  console.log("search dans characterlist", searchCharacter);

  return (
    <div className="CharacterList-wrapper">
      <div className="CharacterList-container">
        {loading && <Load />}
        <Searchbar resultSearchValue={setSearchCharacter} />

        {!loading &&
          characterList.map((character) => (
            <Character key={character.id} character={character} />
          ))}
      </div>
      {currentPage !== 34 && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      )}

      {currentPage !== 1 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>Back</button>
      )}
    </div>
  );
};

export default CharacterList;
