import './PokemonList.css'
import { useEffect, useState } from "react";
import { PokemonCardInfo } from "./PokemonCardInfo";
import { PokemonCard } from './PokemonCard';

export type PokemonType = {
    name: string;
    url: string
}

type PokemonListType = PokemonType[]

export function PokemonList(): JSX.Element {
    const [pokemonList, setPokemonList] = useState<PokemonListType>();
    
  
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then((response) => response.json())
        .then((data) => setPokemonList(data.results))
        .catch((error) => console.log(error));
    }, []);

    return (
      <div className="pokemon-list">
      {
        pokemonList && 
        pokemonList.map((pokemon: PokemonType) => {
          return <PokemonCard  url={pokemon.url} />  
        })
      }
        
        
      </div>
    );
  }
  



export type Pokemon = {
    abilities: { ability: { name: string; url: string } }[];
    base_experience: number;
    forms: { name: string; url: string }[];
    game_indices: { game_index: number; version: { name: string; url: string } }[];
    height: number;
    held_items: any[]; // You can replace 'any' with a more specific type if necessary
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: { move: { name: string; url: string } }[];
    name: string;
    order: number;
    past_types: any[]; // You can replace 'any' with a more specific type if necessary
    species: { name: string; url: string };
    sprites: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
      other: any; // You can replace 'any' with a more specific type if necessary
      versions: any; // You can replace 'any' with a more specific type if necessary
    };
    stats: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
    types: { slot: number; type: { name: string; url: string } }[];
    weight: number;
  };
  