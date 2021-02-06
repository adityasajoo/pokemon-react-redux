import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {GetPokemon} from "../actions/pokemonActions";
import _ from "lodash";
export default function Pokemon(props) {
    const pokemonName = props.match.params.pokemon;
   const dispatch = useDispatch();
   const pokemonSate = useSelector((state)=>state.Pokemon);
    useEffect(()=>{
        dispatch(GetPokemon(pokemonName));
    },[])

    const showData = () =>{
        if(!_.isEmpty(pokemonSate.data[pokemonName])){
            const pokeData = pokemonSate.data[pokemonName]
            return <div className={"pokemon-wrapper"}>
                <div className={"itme"}>
                    <h1>Spirtes</h1>
                    <img src={pokeData.sprites.front_default} alt="errr"/>
                    <img src={pokeData.sprites.back_default} alt="errr"/>
                    <img src={pokeData.sprites.front_shiny} alt="errr"/>
                    <img src={pokeData.sprites.back_shiny} alt="errr"/>
                </div>
                <div className="item">
                    <h1>Status</h1>
                    {pokeData.stats.map(el=>{
                        return <p> {el.stat.name} : {el.base_stat}</p>
                    })}
                </div>
                <div className="item">
                    <h1>Abilities</h1>
                    {pokeData.abilities.map(el=>{
                        return <p> {el.ability.name} </p>
                    })}
                </div>

            </div>
        }
        if(pokemonSate.loading){
            return <p>Loading.....</p>
        }
        if(pokemonSate.errMsg !== ""){
            return <p>{pokemonSate.errMsg}</p>
        }

        return "Unable to load !";

    }
    return (
        <div className="poke">
            <h1>{pokemonName}</h1>
            {showData()} 
        </div>
    )
}
