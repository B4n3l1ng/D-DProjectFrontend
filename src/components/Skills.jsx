function Skills({ character, color }) {
  return (
    <div
      style={{
        border: `5px solid ${color}`,
        width: "33vw",
        height: "auto",
        margin: "1vw",
      }}
    >
      <h3>Skills</h3>
      <div className="skillsBox">
        <div className="skill">
          <span>Acrobatics: </span>
          <span>Animal Handling: </span>
          <span>Arcana: </span>
          <span>Athletics: </span>
          <span>Deception: </span>
          <span>History: </span>
          <span>Insight: </span>
          <span>Intimidation: </span>
          <span>Investigation: </span>
          <span>Medicine: </span>
          <span>Nature: </span>
          <span>Perception: </span>
          <span>Performance: </span>
          <span>Persuasion: </span>
          <span>Religion: </span>
          <span>Sleight of Hand: </span>
          <span>Stealth: </span>
          <span>Survival: </span>
        </div>
        <div className="skill number">
          <span>{character.acrobatics}</span>
          <span>{character.animalHandling}</span>
          <span>{character.arcana}</span>
          <span>{character.athletics}</span>
          <span>{character.deception}</span>
          <span>{character.history}</span>
          <span>{character.insight}</span>
          <span>{character.intimidation}</span>
          <span>{character.investigation}</span>
          <span>{character.medicine}</span>
          <span>{character.nature}</span>
          <span>{character.perception}</span>
          <span>{character.performance}</span>
          <span>{character.persuasion}</span>
          <span>{character.religion}</span>
          <span>{character.sleightOfHand}</span>
          <span>{character.stealth}</span>
          <span>{character.survival}</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
