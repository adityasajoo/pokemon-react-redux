const defaultState = {
    loading:false,
    data:{},
    errMsg : ""
}

const pokemonMultipleReducer = (state = defaultState,action) =>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                loading:true,
                errMsg:""
            };
            
        case "POKEMON_MULTIPLE_FAILED":
            return {
                ...state,
                loading:false,
                errMsg:"Unable to find the pokemon"
            };
        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                loading:false,
                errMsg:"",
                data : {
                    ...state.data,
                    [action.pokemonName]:action.payload
                }
            };

        default:
            return state;
    }
};

export default pokemonMultipleReducer;