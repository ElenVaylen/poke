import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonAbility } from 'store/pokemons/actions'
import { RootReducer } from 'store/store'
import { useLocation } from 'react-router-dom'
import AbilityDetail from 'components/AbilityDetail'
import PageWrapper from 'components/wrappers/PageWrapper'

const AbilityPage: React.FC = () => {
  const dispatch = useDispatch()
  const abilities = useSelector((state: RootReducer) => state.pokemons.abilityDetail)
  const loading = useSelector((state: RootReducer) => state.pokemons.loading)
  const id = Number(useLocation().pathname.match(/\d+/)[0])

  useEffect(() => {
    dispatch(getPokemonAbility({ id }))
  }, [dispatch])

  return (
    <PageWrapper>
      <AbilityDetail detail={abilities} loading={loading} />
    </PageWrapper>
  )
}

export default AbilityPage
