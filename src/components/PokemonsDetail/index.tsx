import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { PokemonDetail } from 'store/pokemons/types'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import Styled from './styles'

interface Props {
  detail: PokemonDetail | null
  loading: boolean
}

const PokemonsDetail: React.FC<Props> = ({ detail, loading }) => {
  if (loading) {
    return (
      <>
        <Skeleton variant='text' height={50} />
        <Skeleton variant='text' height={50} />
        <Skeleton variant='text' height={50} />
      </>
    )
  }
  if (!detail) return null
  const types = detail.types.join(', ')
  return (
    <Styled className='pokemons-detail'>
      <div className='pokemons-detail__content'>
        <Typography variant='h3' component='h1' gutterBottom>
          {detail.name}
        </Typography>
        <div className='pokemons-detail__row'>
          <div className='pokemons-detail__left_col'>
            <div className='pokemons-detail__img' style={{ backgroundImage: `url(${detail.image ? detail.image : 'https://via.placeholder.com/300'})` }} />
            <div className='pokemons-detail__char'>
              <Typography variant='h6' component='p' gutterBottom align='center'>
                {`Experience: ${detail.experience}`}
              </Typography>
              <Typography variant='h6' component='p' gutterBottom align='center'>
                {`Height: ${detail.height}`}
              </Typography>
              <Typography variant='h6' component='p' gutterBottom align='center'>
                {`Weight: ${detail.weight}`}
              </Typography>
            </div>
          </div>
          <div className='pokemons-detail__right_col'>
            <Typography variant='h6' component='p' gutterBottom>
              {`Types: ${types}`}
            </Typography>
            <TableContainer component={Paper}>
              <Table className='pokemons-detail__table' size='small' aria-label='a dense table'>
                <TableHead className='pokemons-detail__table_head'>
                  <TableRow>
                    <TableCell align='left'>Name Stat</TableCell>
                    <TableCell align='center'>Base Stat</TableCell>
                    <TableCell align='center'>Effort points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {detail.stats.map((row) => (
                    <TableRow key={row.stat.name}>
                      <TableCell align='left'>{row.stat.name}</TableCell>
                      <TableCell align='center'>{row.baseStat}</TableCell>
                      <TableCell align='center'>{row.effort}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className='pokemons-detail__abilities'>
              <h3 className='pokemons-detail__abilities_title'>Abilities:</h3>
              {detail.abilities.map((item) => {
                const idAbility = item.url.match(/ability\/\d+/)[0].match(/\d+/)[0]
                return (
                  <Link key={item.name} className='pokemons-detail__abilities_item' to={`/abilities/${idAbility}`}>
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default PokemonsDetail
