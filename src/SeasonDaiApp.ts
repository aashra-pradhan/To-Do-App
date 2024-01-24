//Season dai also did the same task of that searching feature, by himself,,this is the code,,in a simpler way
import { useState } from "react";

import "./SeasonDaiApp.css";

function SeasonDaiApp() {
  const [item, setItem] = useState("");
  const [filterItem, setFilterItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();
    setItemArray([...itemArray, item]);
    setItem("");
  };

  return (
    <>
      <h1>form?</h1>
      <form>
        Enter item:{" "}
        <input
          value={item}
          type="text"
          onChange={(e) => setItem(e.target.value)}
        />
        <button disabled={item.trim() === ""} onClick={handleUpload}>
          upload
        </button>
        Filter item:{" "}
        <input
          value={filterItem}
          type="text"
          onChange={(e) => {
            setFilterItem(e.target.value);
          }}
        />
      </form>
      <ul>
        {itemArray
          .filter((list) => list.includes(filterItem))
          .map((filteredItem, index) => (
            <li key={index}>{filteredItem}</li>
          ))}
      </ul>

      <button
        onClick={() => {
          setItemArray([]);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default SeasonDaiApp;
