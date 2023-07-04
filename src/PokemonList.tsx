import './PokemonList.css'
import { useEffect, useState } from "react";
import { Card, DataType } from "./Card";

export function PokemonList(props: {handleClick: (data: DataType) => void}): JSX.Element {
    const [pokemonList, setPokemonList] = useState<PokemonListType[]>();
    

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.log(error))
        
    },[]);

    if (!pokemonList){
      return <>Is loading </>
    }

    return ( 
        <div className="pokemon-list"> 
       {pokemonList.map((pokemon: PokemonListType) => {
          return <div key={pokemon.name} className="card" > 
            <Card url={pokemon.url} handleClick={props.handleClick}/> 
          </div>
        })}
      </div>
    );
  }
  


export type PokemonListType = {
    name: string;
    url: string
}

export type Pokemon = {
    abilities: { ability: { name: string; url: string } }[];
    base_experience: number;
    forms: { name: string; url: string }[];
    game_indices: { game_index: number; version: { name: string; url: string } }[];
    height: number;
    held_items: any[]; 
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: { move: { name: string; url: string } }[];
    name: string;
    order: number;
    past_types: any[]; 
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
      other: any; 
      versions: any; 
    };
    stats: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
    types: { slot: number; type: { name: string; url: string } }[];
    weight: number;
  };
  