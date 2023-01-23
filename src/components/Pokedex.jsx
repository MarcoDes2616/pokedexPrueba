import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import GetPokemons from './GetPokemons';

const Pokedex = () => {
    const userName = useSelector(state => state.userName)
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")
    const [suggestion, setSuggestion] = useState([])

    useEffect(() => {
        getAllPokemons();
    }, [])

    const getAllPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
            .then(res => setPokemons(res.data))
    }
    

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <h1>pokedex</h1>{userName}
            <input type="text" value={search} onChange={(e => setSearch(e.target.value))} />
            <button onClick={() => navigate(`/pokedex/${search}`)}>Search</button>
            
            <GetPokemons pokemons={pokemons} setPokemons={setPokemons} />
        </div>
    );
};

export default Pokedex;