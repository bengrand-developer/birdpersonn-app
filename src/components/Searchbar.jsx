import React, { useState } from "react";
import debounce from "lodash/debounce";

const Searchbar = ({ resultSearchValue }) => {
  return (
    <div>
      <input
        type="search"
        onChange={(e) => {
          const debouncedSubmit = debounce(
            () => resultSearchValue(e.target.value),
            2000
          );
          debouncedSubmit();
        }}
      ></input>
    </div>
  );
};

export default Searchbar;
