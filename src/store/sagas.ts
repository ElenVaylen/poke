import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects'
import {
  GET_POKEMONS,
  getPokemonsSuccess,
  getPokemonsError,
  getPokemonDetailSuccess,
  getPokemonDetailError,
  GET_POKEMON_DETAIL,
  getPokemonAbilitySuccess,
  getPokemonAbilityError,
  GET_POKEMON_ABILITY,
} from './pokemons/actions'

// eslint-disable-next-line consistent-return
function* fetchPokemonsImages(id) {
  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const result = yield call(fetch, apiUrl)
    const data = yield result.json()
    return data.sprites.other.dream_world.front_default
  } catch (e) {
    yield put(getPokemonsError(e))
  }
}

function* fetchPokemons(action) {
  try {
    const { itemsPage, offset } = action.payload
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${itemsPage}&offset=${offset}`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    const arr = data.results.map((item) => Number(item.url.match(/pokemon\/\d+/)[0].match(/\d+/)[0]))
    const images = yield all(arr.map((id) => call(fetchPokemonsImages, id)))
    const newResult = data.results.map((item, index) => ({
      ...item,
      image: images[index],
    }))
    const newData = { ...data, results: newResult }
    yield put(getPokemonsSuccess(newData))
  } catch (e) {
    yield put(getPokemonsError(e))
  }
}

function* watchFetchPokemons() {
  yield takeLatest(GET_POKEMONS, fetchPokemons)
}

function* fetchPokemonsDetail(action) {
  try {
    const { id } = action.payload
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    yield put(getPokemonDetailSuccess(data))
  } catch (e) {
    yield put(getPokemonDetailError(e))
  }
}

function* watchFetchPokemonsDetail() {
  yield takeLatest(GET_POKEMON_DETAIL, fetchPokemonsDetail)
}

function* fetchPokemonsAbility(action) {
  try {
    const { id } = action.payload
    const apiUrl = `https://pokeapi.co/api/v2/ability/${id}/`
    const result = yield fetch(apiUrl)
    const data = yield result.json()
    yield put(getPokemonAbilitySuccess(data))
  } catch (e) {
    yield put(getPokemonAbilityError(e))
  }
}

function* watchFetchPokemonsAbility() {
  yield takeLatest(GET_POKEMON_ABILITY, fetchPokemonsAbility)
}

export default function* saga() {
  yield all([
    fork(watchFetchPokemons),
    fork(watchFetchPokemonsDetail),
    fork(watchFetchPokemonsAbility),
  ])
}
