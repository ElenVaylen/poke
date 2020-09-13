import { actionGenerator } from '../helpers'

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
export const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR'

export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'
export const GET_POKEMON_DETAIL_SUCCESS = 'GET_POKEMON_DETAIL_SUCCESS'
export const GET_POKEMON_DETAIL_ERROR = 'GET_POKEMON_DETAIL_ERROR'

export const GET_POKEMON_ABILITY = 'GET_POKEMON_ABILITY'
export const GET_POKEMON_ABILITY_SUCCESS = 'GET_POKEMON_ABILITY_SUCCESS'
export const GET_POKEMON_ABILITY_ERROR = 'GET_POKEMON_ABILITY_ERROR'

const getPokemons = (data) => actionGenerator(GET_POKEMONS, data)
const getPokemonsSuccess = (data) => actionGenerator(GET_POKEMONS_SUCCESS, data)
const getPokemonsError = (data) => actionGenerator(GET_POKEMONS_ERROR, data)

const getPokemonDetail = (data) => actionGenerator(GET_POKEMON_DETAIL, data)
const getPokemonDetailSuccess = (data) => actionGenerator(GET_POKEMON_DETAIL_SUCCESS, data)
const getPokemonDetailError = (data) => actionGenerator(GET_POKEMON_DETAIL_ERROR, data)

const getPokemonAbility = (data) => actionGenerator(GET_POKEMON_ABILITY, data)
const getPokemonAbilitySuccess = (data) => actionGenerator(GET_POKEMON_ABILITY_SUCCESS, data)
const getPokemonAbilityError = (data) => actionGenerator(GET_POKEMON_ABILITY_ERROR, data)

export {
  getPokemons,
  getPokemonsSuccess,
  getPokemonsError,
  getPokemonDetail,
  getPokemonDetailSuccess,
  getPokemonDetailError,
  getPokemonAbility,
  getPokemonAbilitySuccess,
  getPokemonAbilityError,
}
