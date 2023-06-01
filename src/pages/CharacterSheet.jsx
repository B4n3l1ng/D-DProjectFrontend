import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Saves from "../components/Saves";
import Senses from "../components/Senses";
import SheetHeader from "../components/SheetHeader";
import Skills from "../components/Skills";
import Stats from "../components/Stats";

function CharacterSheet() {
  const { id } = useParams();
  const [char, setChar] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("");

  // To use after backend is working
  const fetchCharacter = async () => {
    const response = await axios.get(`http://localhost:5005/characters/${id}`);
    if (response) {
      setChar(response.data);
      switch (response.data.class) {
        case "Artificier":
          setColor("rgb(213, 145, 57)");
          break;
        case "Barbarian":
          setColor("rgb(231, 98, 62)");
          break;
        case "Bard":
          setColor("rgb(171, 109, 172)");
          break;
        case "Cleric":
          setColor("rgb(145, 161, 178)");
          break;
        case "Druid":
          setColor("rgb(122, 133, 59)");
          break;
        case "Fighter":
          setColor("rgb(	127, 81, 62)");
          break;
        case "Monk":
          setColor("rgb(81, 165, 197)");
          break;
        case "Paladin":
          setColor("rgb(181, 158, 84)");
          break;
        case "Ranger":
          setColor("rgb(80, 127, 98)");
          break;
        case "Rogue":
          setColor("rgb(85, 87, 82)");
          break;
        case "Sorcerer":
          setColor("rgb(153, 46, 46)");
          break;
        case "Warlock":
          setColor("rgb(123, 70, 155)");
          break;
        case "Wizard":
          setColor("rgb(42, 80, 161)");
          break;
        case "Blood Hunter":
          setColor("rgb(247, 59, 59)");
          break;
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <SheetHeader character={char} color={color} />
          <Stats character={char} color={color} />
          <div className="sheetBottom">
            <div className="savesAndSenses">
              <Saves character={char} color={color} />
              <Senses character={char} color={color} />
            </div>
            <Skills character={char} color={color} />
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterSheet;
