import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'

import Tests from './pages/Tests'
import History from './pages/History'

import './App.css'

function App() {
  return (
    <Router>
      <div className="max-w-2xl mx-auto flex p-4 items-start">
        <nav className="px-1 border">
          <ul>
            <li className="p-1 border-b">
              <NavLink to="/tests" activeClassName="font-bold">
                Tests
              </NavLink>
            </li>
            <li className="p-1">
              <NavLink to="/history" activeClassName="font-bold">
                History
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="px-4">
          <Switch>
            <Route path="/tests">
              <Tests />
            </Route>
            <Route path="/history">
              <History />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
