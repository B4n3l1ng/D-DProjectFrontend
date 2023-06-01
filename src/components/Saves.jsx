import { useEffect } from "react";
import { useState } from "react";

function Saves({ character, color }) {
  const [strSave, setStrSave] = useState(0);
  const [dexSave, setDexSave] = useState(0);
  const [conSave, setConSave] = useState(0);
  const [intSave, setIntSave] = useState(0);
  const [wisSave, setWisSave] = useState(0);
  const [chaSave, setChaSave] = useState(0);

  const calculateSaves = () => {
    if (character.strSaveProf) {
      setStrSave(character.strMod + character.profBonus);
    } else {
      setStrSave(character.strMod);
    }
    if (character.dexSaveProf) {
      setDexSave(character.dexMod + character.profBonus);
    } else {
      setDexSave(character.dexyMod);
    }
    if (character.conSaveProf) {
      setConSave(character.conMod + character.profBonus);
    } else {
      setConSave(character.conMod);
    }
    if (character.intSaveProf) {
      setIntSave(character.intMod + character.profBonus);
    } else {
      setIntSave(character.intMod);
    }
    if (character.wisSaveProf) {
      setWisSave(character.wisMod + character.profBonus);
    } else {
      setWisSave(character.wisMod);
    }
    if (character.chaSaveProf) {
      setChaSave(character.chaMod + character.profBonus);
    } else {
      setChaSave(character.chaMod);
    }
  };

  useEffect(() => {
    calculateSaves();
  }, []);

  return (
    <div className="savesBox" style={{ borderColor: `${color}` }}>
      <h3>Saving Throws</h3>
      <div className="saves">
        <div className="save">
          Strength: <span className="number">{strSave}</span>
        </div>
        <div className="save">
          Dexterity: <span className="number">{dexSave}</span>
        </div>
        <div className="save">
          Constitution: <span className="number">{conSave}</span>
        </div>
        <div className="save">
          Intelligence: <span className="number">{intSave}</span>
        </div>
        <div className="save">
          Wisdom: <span className="number">{wisSave}</span>
        </div>
        <div className="save">
          Charisma: <span className="number">{chaSave}</span>
        </div>
      </div>
    </div>
  );
}

export default Saves;
