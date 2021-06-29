import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Login from './Login'
import * as UserApi from './_DATA.js'
import Header from './Header'
/*
 *  Created by Akshay Niranjan
 *  Last Modified
 *  21 June 2021
*/
let database={};
class GameApp extends Component{
  state = { users: [] };



  componentDidMount() {
    const getUsers = async () => {
      return await UserApi._getUsers();
    }
    database=getUsers();
    console.log(getUsers());
    this.setState({users:getUsers()});
  }


  render(){
    const { users } = this.state;
    return(
      <div className="app">
          <Header/>
          <BrowserRouter>
              <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <div>
                        <h1>Home</h1>
                      </div>
                    )}
                  />
                  <Route
                    path="/login"
                    render={() => (
                      <Login users={this.state.users}/>
                    )}
                  />
                  <Route
                    path="/questions"
                    render={() => (
                      <div>
                        <h1>questions</h1>
                      </div>
                    )}
                  />
                  <Route
                    path="/add"
                    render={() => (
                      <div>
                        <h1>add</h1>
                      </div>
                    )}
                  />
                  <Route
                    path="/leaderboard"
                    render={() => (
                      <div>
                        <h1>leaderboard</h1>
                      </div>
                    )}
                  />
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}
export default GameApp;
