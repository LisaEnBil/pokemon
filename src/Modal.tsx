import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonList";

export const Modal = (props: {name: string, isClicked: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
          .then((response) => response.json())
          .then((data) => setPokemon(data.results))
          .catch((error) => console.log(error));
      }, [props.name]);

    const handleClick = () => {
      props.isClicked(false)
    }
    return <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{props.name}</h4>
        </div>
        <div className="modal-body">
          Content
        </div>
        <div className="modal-footer">
          <button className="button" onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
}