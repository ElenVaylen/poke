import React from 'react'
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom'

import MainPage from 'pages/MainPage'
import DetailPage from 'pages/DetailPage'
import AbilityPage from 'pages/AbilityPage'

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/detail/:id' exact>
        <DetailPage />
      </Route>
      <Route path='/abilities/:id' exact>
        <AbilityPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)
export default App
