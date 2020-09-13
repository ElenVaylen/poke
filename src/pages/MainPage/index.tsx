import React, { useEffect } from 'react'
import GeneralWrapper from 'components/wrappers/GeneralWrapper'
import { useDispatch, useSelector } from 'react-redux'
import PokemonList from 'components/PokemonList'
import { Container } from '@material-ui/core'
import { getPokemons } from 'store/pokemons/actions'

import { RootReducer } from 'store/store'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const pokemonsStore = useSelector((state: RootReducer) => state.pokemons.pokemons)
  const itemsPerPage = 20
  const itemsOffset = 20

  useEffect(() => {
    dispatch(getPokemons({ itemsPerPage, itemsOffset }))
  }, [dispatch])

  return (
    <GeneralWrapper>
      <div className='main-page'>
        <Container>
          {pokemonsStore
          && <PokemonList items={pokemonsStore} />}
        </Container>
      </div>
    </GeneralWrapper>
  )
}

export default MainPage
