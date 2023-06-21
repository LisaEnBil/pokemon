import './Card.css'
import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonList";

export function Card(props: {url: any, handleClick: (isClicked: boolean) => void}){

    const url = props.url

    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        if (url) {
          fetch(url)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.log(error));
        }
    }, [url, pokemon]);

      if (!pokemon){
        return <>NOOOO!</>
      }

      const clickHandler = () => {
        console.log("card");
        props.handleClick(true)
      }

     return <div key={pokemon.id} className="pokemon-card" onClick={clickHandler}>
         <img src={pokemon.sprites.front_default} alt="pokemon">
        </img>
        <p>
            {pokemon.name}
        </p>
    </div> 
}