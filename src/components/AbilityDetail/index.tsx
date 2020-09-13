import React from 'react'
import { AbilityDetail } from 'store/pokemons/types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import Styled from './styles'

interface Props {
  detail: AbilityDetail | null
  loading: boolean
}

const AbilityDetail: React.FC<Props> = ({ detail, loading }) => {
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
  return (
    <Styled className='ability-detail'>
      <Typography variant='h3' component='h1' gutterBottom>
        {detail.name}
      </Typography>
      <Typography variant='h6' component='p' className='ability-detail__desc' gutterBottom>
        {detail.effect}
      </Typography>
      <Typography variant='h6' component='p' className='ability-detail__desc'>
        {`Generation: ${detail.generation}`}
      </Typography>
      <div className='ability-detail__owners'>
        {detail.owners.map((item) => {
          const id = item.url.match(/pokemon\/\d+/)[0].match(/\d+/)[0]
          return (
            <Button key={id} href={`/detail/${id}`} color='secondary'>
              {item.name}
            </Button>
          )
        })}
      </div>
    </Styled>
  )
}

export default AbilityDetail
