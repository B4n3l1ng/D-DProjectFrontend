import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharBox from "../components/CharBox";
import Navbar from "../components/Navbar";

function Sheets() {
  const [characters, setCharacters] = useState([]);

  const fetch = async () => {
    const response = await axios.get("http://localhost:5005/characters", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setCharacters(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <Navbar />
      <div className="sheetList">
        {characters.map((character) => {
          return (
            <div key={character._id}>
              <CharBox character={character} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sheets;
