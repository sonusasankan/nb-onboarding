import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login'
import Welcome from './components/Welcome'
import Hobby from './components/Hobby'
import { Provider } from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <main>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/welcome" component={Welcome}></Route>
                <Route path="/hobby" component={Hobby}></Route>
              </Switch>
            </div>
          </main>
        </Router>
      </Provider>
    );
  }
}

export default App;
