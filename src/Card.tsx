import './Card.css'
import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonList";
import { Modal } from './Modal';

export function Card(props: {url: any}){

    const url = props.url

    const [pokemon, setPokemon] = useState<Pokemon>();
    const [isClicked, setIsClicked] = useState<boolean>(false);


    useEffect(() => {
        if (url !== "") {
          fetch(url)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.log(error));
        }
      }, [url]);

      const handleClick = () => {
        setIsClicked(true); 
        return  pokemon && <Modal name={pokemon.name} isClicked={setIsClicked} />
      }

     return pokemon ? <div key={pokemon.id} className="pokemon-card" onClick={handleClick}>
         <img src={pokemon.sprites.front_default} alt="pokemon">
        </img>
        <p>
            {pokemon.name}
        </p>
    </div> 
    : 
    <>NOOOO!</>

}
