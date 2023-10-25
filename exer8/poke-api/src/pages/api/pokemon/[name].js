//import axios from 'axios';

export default async function handler(req, res) {
    let response;
    try {
        response = await fetch('https://pokeapi.co/api/v2/pokemon/' + req.query.name);
        response = await response.json();
    } catch (error) {
        console.log(error)
    }
    let types = response.types.map(type => {return type.type.name})
    let name = response.name
    let sprite = response.sprites.front_default
    try {
        response = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + req.query.name);
        response = await response.json();
    } catch (error) {
        console.log(error)
    }
    let color = response.color.name
    return res.status(200).send({pokemonName : name, sprite : sprite, types : types, color : color})
}