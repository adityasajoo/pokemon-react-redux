import axios from 'axios';
export const GetPokemonList = (page) => async dispatch =>{

    try {
        dispatch({
            type: "POKEMON_LIST_LOADING"
        });

        const offset = page * 15 - 15;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`)
        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload:res.data
        })

    } catch (error) {
       dispatch({
           type:"POKEMON_LIST_FAILED",
       })
        
    }

}

export const GetPokemon = (pokemon) => async dispatch =>{
    try {
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING"
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({
            type: "POKEMON_MULTIPLE_SUCCESS",
            payload:res.data,
            pokemonName : pokemon
        })

    } catch (error) {
       dispatch({
           type:"POKEMON_MULTIPLE_FAILED",
       })
        
    }

}