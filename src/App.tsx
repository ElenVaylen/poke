import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import DetailPage from 'pages/DetailPage'
import AbilityPage from 'pages/AbilityPage'

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/detail/:id' component={DetailPage} />
      <Route path='/abilities/:id' component={AbilityPage} />
    </Switch>
  </>
)
export default App
