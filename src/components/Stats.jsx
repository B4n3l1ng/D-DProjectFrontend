function Stats({ character, color }) {
  const border = { borderColor: `${color}` };
  return (
    <div className="characterStats">
      <div className="stat" style={border}>
        <span>Strength</span> <span className="mod">{character.str}</span>{" "}
        <span>{character.strMod}</span>
      </div>
      <div className="stat" style={border}>
        <span>Dexterity</span> <span className="mod">{character.dex}</span>{" "}
        <span>{character.dexMod}</span>
      </div>
      <div className="stat" style={border}>
        <span>Constitution</span> <span className="mod">{character.con}</span>{" "}
        <span>{character.conMod}</span>
      </div>
      <div className="stat" style={border}>
        <span>Intelligence</span> <span className="mod">{character.int}</span>{" "}
        <span>{character.intMod}</span>
      </div>
      <div className="stat" style={border}>
        <span>Wisdom</span> <span className="mod">{character.wis}</span>{" "}
        <span>{character.wis}</span>
      </div>
      <div className="stat" style={border}>
        <span>Charisma</span> <span className="mod">{character.cha}</span>{" "}
        <span>{character.chaMod}</span>
      </div>
    </div>
  );
}

export default Stats;
