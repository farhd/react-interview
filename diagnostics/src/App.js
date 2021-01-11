import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Tests from './pages/Tests'
import History from './pages/History'

import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tests">Tests</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/tests">
            <Tests />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
