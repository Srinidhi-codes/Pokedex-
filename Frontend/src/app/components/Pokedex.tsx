import { useState } from 'react';
import PokemonRow from './PokemonRow';
import { env } from '../utils/env';

const PokedexPage: React.FC = () => {
  const [pokemonArray, setPokemonArray] = useState<any[]>([]);
  const [inputArray, setInputArray] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${env.backendUrl}/api/pokemon/${inputArray}`);
    const data = await res.json();
    setPokemonArray(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          placeholder="Enter Pokemon names (comma-separated)"
        />
        <button type="submit">Search</button>
      </form>
      {pokemonArray.map((pokemon, index) => (
        <PokemonRow key={index} {...pokemon} />
      ))}
    </div>
  );
};

export default PokedexPage;
