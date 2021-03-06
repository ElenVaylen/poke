import React, { useCallback, useEffect, useState } from 'react'
import { Pokemon } from 'store/pokemons/types'
import PokemonListItem from 'components/PokemonList/PokemonListItem'
import Grid from '@material-ui/core/Grid'
import Filter from 'components/Filter'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Styled from './styles'

interface Props {
  items: Pokemon[] | null
}

const PokemonList: React.FC<Props> = ({ items }) => {
  const theme = useTheme()
  const lg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  const sm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const spacingRow = () => {
    if (lg) {
      return 5
    } if (sm) {
      return 3
    }
    return 2
  }
  const [filterValue, setFilterValue] = useState('')
  const [filterResult, setFilterResult] = useState(null)

  useEffect(() => {
    if (items) {
      setFilterResult(items)
    }
  }, [items])

  const filter = useCallback((value, array) => {
    if (value !== '') {
      const arr = array.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      setFilterResult(arr)
    } else {
      setFilterResult(null)
    }
  }, [])

  useEffect(() => {
    filter(filterValue, items)
  }, [filter, filterValue, items])

  const pokemonsResult = filterResult || items
  if (!items || items.length === 0) return null
  return (
    <Styled className='pokemon-list'>
      <Filter
        filterValue={filterValue}
        onChange={(value: string) => {
          setFilterValue(value)
        }}
      />
      <Grid container spacing={spacingRow()} className='pokemon-list__row'>
        {pokemonsResult.map((item) => (
          <PokemonListItem key={item.name} name={item.name} url={item.url} image={item.image} />
        ))}
      </Grid>
    </Styled>
  )
}

export default PokemonList
