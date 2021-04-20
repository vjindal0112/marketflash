import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import Salesforce from './pages/Salesforce'
import Mailchimp from './pages/Mailchimp'
import Email from './pages/Email'
import People from './pages/People'
import Sent from './pages/Sent'

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/salesforce" component={Salesforce} />
      <Route path="/mailchimp" component={Mailchimp} />
      <Route path="/email" component={Email} />
      <Route path="/people" component={People} />
      <Route path="/sent" component={Sent} />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
