import Image from "next/image";

type PokemonRowProps = {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
  
  const PokemonRow: React.FC<PokemonRowProps> = ({ id, name, types=[], sprite }) => {
    return (
      <div className="w-[20rem] h-[auto]">
      <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-500
      rounded-xl p-5 hover:shadow-md ">
        <Image src={sprite} alt={name} width={250} height={200} className="aspect-square rounded-lg"/>
        <div className="py-2">
        <p className="bg-black text-center text-white font-semibold rounded-xl px-2 w-[5rem]">ID: {id}</p>
        <h1 className="font-bold capitalize md:text-[2rem] text-[1.5rem]">{name}</h1>
        <p className="text-semibold md:text-[1.5rem] text-[1rem] text-black  ">{types.join(', ')}</p>
        </div>
      </div>
        </div>
    );
  };
  
  export default PokemonRow;
  