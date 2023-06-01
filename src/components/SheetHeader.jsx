function SheetHeader({ character, color }) {
  return (
    <div className="sheetHeader" style={{ borderColor: `${color}` }}>
      <h3>{character.name}</h3>
      <p>
        {character.race} {character.subclass} {character.class}
      </p>
      <p>Level: {character.level}</p>
    </div>
  );
}

export default SheetHeader;
