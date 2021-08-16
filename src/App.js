import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import ProjectsPage from './Components/ProjectsPage/ProjectsPage'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projekty">
          <ProjectsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
