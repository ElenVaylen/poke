import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonDetail } from 'store/pokemons/actions'
import { RootReducer } from 'store/store'
import { useLocation } from 'react-router-dom'
import PageWrapper from 'components/wrappers/PageWrapper'
import PokemonsDetail from 'components/PokemonsDetail'

const DetailPage: React.FC = () => {
  const dispatch = useDispatch()
  const pokemonDetail = useSelector((state: RootReducer) => state.pokemons.detail)
  const loading = useSelector((state: RootReducer) => state.pokemons.loading)
  const id = Number(useLocation().pathname.match(/\d+/)[0])

  useEffect(() => {
    dispatch(getPokemonDetail({ id }))
  }, [dispatch])

  return (
    <PageWrapper>
      <PokemonsDetail detail={pokemonDetail} loading={loading} />
    </PageWrapper>
  )
}

export default DetailPage
