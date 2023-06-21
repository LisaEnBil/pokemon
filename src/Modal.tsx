import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonList";
import './components/Modal.css';

export const Modal = (props: {name: string, handleClick: (isClicked: boolean) => void}) => {
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
          .then((response) => response.json())
          .then((data) => setPokemon(data.results))
          .catch((error) => console.log(error));
      }, [props.name]);

    const clickHandler = () => {
      props.handleClick(false)
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
          <button className="button" onClick={clickHandler}>Close</button>
        </div>
      </div>
    </div>
}