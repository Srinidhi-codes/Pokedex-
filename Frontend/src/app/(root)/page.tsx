"use client"
import { useState } from "react";
import PokemonType from "../components/PokemonType";
import PokemonRow from "../components/PokemonRow";
import { env } from "../utils/env";
import toast from "react-hot-toast";

const PokedexPage: React.FC = () => {
  const [pokemonArray, setPokemonArray] = useState<any[]>([]);
  const [inputArray, setInputArray] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(!inputArray){
        toast.error("Please enter valid input")
        return
      }
      const lowercasedInput = inputArray.toLowerCase();
      const res = await fetch(`${env.backendUrl}/api/pokemon/${lowercasedInput}`);
      const data = await res.json();
      if (!data.pokemon || data.pokemon.length === 0) {
        toast.error('Pokemon Not Found! Try another');
      }
      const pokemonArray = Array.isArray(data.pokemon) ? data.pokemon : [data.pokemon];
      setPokemonArray(pokemonArray);
    } catch (error) {
      toast.error('Error fetching data:');

    }
  };
  

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-[url('https://static1.thegamerimages.com/wordpress/wp-content/uploads/Pokemon-game-series.jpg')] h-screen w-full">
      <form className="flex flex-wrap gap-2 justify-center items-center gap-x-3 py-5" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          placeholder="Enter Pokemon(comma-separated)"
          className="md:w-[20rem] md:h-[3.5rem] w-[12rem] h-[2.5rem] border border-black/20 rounded-xl p-5 capitalize"
        />
        <button className="bg-blue-300 hover:bg-blue-500 hover:text-white px-3 md:py-3 py-2 rounded-md text-[1rem]" type="submit">Search</button>
      <PokemonType selectedType={selectedType} selectType={setSelectedType} />
      </form>
      <div className="flex justify-center items-center flex-wrap mt-4 gap-3 p-10">
      {pokemonArray
        ?.filter((pokemon) => !selectedType || pokemon.types.includes(selectedType))
        .map((pokemon, index) => (
          <PokemonRow key={index} {...pokemon} />
        ))}
        </div>
    </div>
  );
};

export default PokedexPage;