import { useEffect, useState } from "react";
import { Pokemon } from "./PokemonList";
import './components/Modal.css';
import { DataType } from "./Card";
import { initialPokemonState } from "./redux/pokemon.initial-state";

export const Modal = (props: { handleClick: (data: DataType) => void, pokemon: Pokemon}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);  

    const clickHandler = () => {
      props.handleClick({isClicked: false, pokemon: initialPokemonState})
    }
    useEffect(() => {
        if (props.pokemon){
          setIsLoading(false);
        }
        console.log("useEffect")
    }, [props.pokemon]);

    console.log("hello")
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{props.pokemon.name}</h4>
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
