import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { pokemonsReducer } from './pokemons/redusers'
import { PokemonsStore } from './pokemons/types'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export interface RootReducer {
  pokemons: PokemonsStore;
}

const store = createStore(
  combineReducers({
    pokemons: pokemonsReducer,
  }),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(saga)

export default store
