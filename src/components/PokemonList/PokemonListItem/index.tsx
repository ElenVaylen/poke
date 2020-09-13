import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { Pokemon } from 'store/pokemons/types'
import Styled from './styles'

const PokemonListItem: React.FC<Pokemon> = ({ name, url, image }) => {
  const id = url.match(/pokemon\/\d+/)[0].match(/\d+/)[0]
  return (
    <Styled item xs={6} lg={3} className='pokemon-list-item'>
      <Card className='pokemon-list-item__card'>
        <CardActionArea>
          <Link to={`/detail/${id}`} className='pokemon-list-item__link'>
            <CardMedia
              className='pokemon-list-item__img'
              image={image || 'https://via.placeholder.com/300'}
            />
            <CardContent className='pokemon-list-item__content'>
              <Typography variant='h6' component='h2'>
                {name}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Styled>
  )
}

export default PokemonListItem
