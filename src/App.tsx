import React from 'react'
import {
  BrowserRouter, Route, Switch,
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
    </Switch>
  </BrowserRouter>
)
export default App
