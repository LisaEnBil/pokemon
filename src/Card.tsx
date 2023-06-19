import './Card.css'
import { useEffect, useState } from "react";

import { Pokemon } from "./PokemonList";

export function Card(props: {url: any}){

    const url = props.url

    const [pokemon, setPokemon] = useState<Pokemon>();


    useEffect(() => {
        if (url !== "") {
          fetch(url)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.log(error));
        }
      }, [url]);

  

     return  pokemon ? 
     <div key={pokemon.id} className="pokemon-card">
         <img src={pokemon.sprites.front_default} alt="pokemon">
        </img>
        <p>
            {pokemon.name}
        </p>
    </div> 
   
    : 
    <>
        NOOO!!
    </>

}
