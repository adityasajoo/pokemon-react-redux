import { useDispatch, useSelector } from "react-redux"
import _  from "lodash";
import { useEffect,useState } from "react";
import { GetPokemonList } from "../actions/pokemonActions";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
export default function PokemonList(props) {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);
    useEffect(()=>{
        fetchData(1);
    },[]);

    const fetchData = (page = 1) =>{
        dispatch(GetPokemonList(page));
    }
    const showData = () =>{
        
        if (pokemonList.loading)
        return <>Loading...</>


        if(!_.isEmpty(pokemonList.data))
        return pokemonList.data.map(el=>{
            return <div className="list-wrapper">
                        <div className={"pokemon-item"}>
                            <p>{el.name}</p>
                            <Link to={`/pokemon/${el.name}`} >View</Link>
                        </div>
                </div>
        })


        if(pokemonList.errMsg !== "")
        return <p>{pokemonList.errMsg}</p>

        return <p>Unable to get data ;(</p>
    }
    
    return (
        <div>
            <div className={"search-wrapper"}>
                <p>Search : </p>
                <input type="text" onChange={e=> setSearch(e.target.value)}/>
                <button onClick={()=> props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
            {showData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate 
                    pageCount = {Math.ceil(pokemonList.count/15)}
                    pageRangeDisplayed = {2}
                    marginPagesDisplayed = {1}
                    onPageChange = {(data)=> fetchData(data.selected+1) }
                    containerClassName = {"pagination"}
                />
            )}
        </div>
    )
}
