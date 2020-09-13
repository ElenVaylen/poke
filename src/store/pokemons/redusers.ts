import { PokemonsStore } from 'store/pokemons/types'
import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_ERROR,
  GET_POKEMON_ABILITY,
  GET_POKEMON_ABILITY_SUCCESS,
  GET_POKEMON_ABILITY_ERROR,
} from './actions'

const initialState: PokemonsStore = {
  loading: false,
  error: null,
  pokemons: null,
  count: null,
  next: null,
  previous: null,
  detail: null,
  abilityDetail: null,
}

const handlers = {
  [GET_POKEMONS]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_POKEMONS_SUCCESS]: (state, data) => ({
    ...state,
    loading: false,
    pokemons: data.results.map((item) => ({
      name: item.name,
      url: item.url,
      image: item.image,
    })),
    count: data.count,
    next: data.next,
    previous: data.previous,
  }),
  [GET_POKEMONS_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data,
  }),
  [GET_POKEMON_DETAIL]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_POKEMON_DETAIL_SUCCESS]: (state, data) => ({
    ...state,
    loading: false,
    error: null,
    detail: {
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      experience: data.base_experience,
      height: data.height,
      weight: data.weight,
      stats: data.stats.map((item) => ({
        baseStat: item.base_stat,
        effort: item.effort,
        stat: {
          name: item.stat.name,
          url: item.stat.url,
        },
      })),
      abilities: data.abilities.map((item) => ({
        name: item.ability.name,
        url: item.ability.url,
      })),
      types: data.types.map((item) => (item.type.name)),
    },
  }),
  [GET_POKEMON_DETAIL_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data,
  }),
  [GET_POKEMON_ABILITY]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [GET_POKEMON_ABILITY_SUCCESS]: (state, data) => ({
    ...state,
    loading: false,
    error: null,
    abilityDetail: {
      name: data.name,
      effect: data.effect_entries.find((item) => item.language.name === 'en').effect,
      generation: data.generation.name,
      owners: data.pokemon.map((item) => ({
        name: item.pokemon.name,
        url: item.pokemon.url,
      })),
    },
  }),
  [GET_POKEMON_ABILITY_ERROR]: (state, data) => ({
    ...state,
    loading: false,
    error: data,
  }),
  DEFAULT: (state) => state,
}

export function pokemonsReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}
