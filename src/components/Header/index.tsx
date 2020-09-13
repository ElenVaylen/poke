import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Styled from './styles'

const Header: React.FC = () => (
  <Styled className='header'>
    <AppBar position='static'>
      <Toolbar>
        <a href='/' className='header__logo'>
          <Typography className='header__logo_text'>Pokemons</Typography>
        </a>
      </Toolbar>
    </AppBar>
  </Styled>
)

export default Header
