type PokemonTypeSelectionProps = {
    selectedType: string | undefined;
    selectType: (type: string | undefined) => void;
  };
  
  const PokemonType: React.FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => {
    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      selectType(e.target.value);
    };
    const pokemonTypes = [
      "Normal",
      "Fire",
      "Water",
      "Electric",
      "Grass",
      "Ice",
      "Fighting",
      "Poison",
      "Ground",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Ghost",
      "Dragon",
      "Dark",
      "Steel",
      "Fairy"
    ];
  
    return (
      <div>
        <select className="border border-black/20 rounded-xl" value={selectedType} onChange={handleTypeChange}>
          <option value="">All</option>
          {pokemonTypes.map((type, i) => (
            <option key={i} value={type}>{type}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default PokemonType;
  