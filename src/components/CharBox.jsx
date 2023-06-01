import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CharBox({ character }) {
  /* console.log(character); */
  const [color, setColor] = useState("");
  useEffect(() => {
    switch (character.class) {
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
  }, []);

  return (
    <div className="charBox" style={{ borderColor: `${color}` }}>
      <h3>{character.name}</h3>
      <p>
        {character.race} {character.subclass} {character.class}
      </p>
      <Link to={`/sheets/${character._id}`}>See character sheet</Link>
    </div>
  );
}

export default CharBox;
