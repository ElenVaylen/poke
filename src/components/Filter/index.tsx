import React from 'react'
import TextField from '@material-ui/core/TextField'
import Styled from './styles'

export interface Props {
  onChange: (value: string) => void
  filterValue: string
}

const Filter: React.FC<Props> = ({ onChange, filterValue }) => (
  <Styled className='filter'>
    <TextField
      label='Filter by name'
      variant='outlined'
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      value={filterValue}
      size='small'
      fullWidth
    />
  </Styled>
)

export default Filter
