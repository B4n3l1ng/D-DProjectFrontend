import { useEffect } from "react";
import { useState } from "react";

function Senses({ character, color }) {
  const [passivePerc, setPassivePerc] = useState(0);
  const [passiveInv, setPassiveInv] = useState(0);
  const [passiveIns, setPassiveIns] = useState(0);
  const calculateSenses = () => {
    setPassivePerc(character.perception + 10);
    setPassiveInv(character.investigation + 10);
    setPassiveIns(character.insight + 10);
  };

  useEffect(() => {
    calculateSenses();
  }, []);
  return (
    <div className="sensesBox" style={{ borderColor: `${color}` }}>
      <h3>Senses</h3>
      <div className="senses">
        <div className="senseTitle">
          <span>Passive WIS (Perception): </span>
          <span>Passive INT (Investigation): </span>
          <span>Passive WIS (Insight): </span>
        </div>
        <div className="sense">
          <span>{passivePerc}</span>
          <span>{passiveInv}</span>
          <span>{passiveIns}</span>
        </div>
      </div>
    </div>
  );
}

export default Senses;
