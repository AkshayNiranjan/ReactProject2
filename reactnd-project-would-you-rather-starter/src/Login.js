import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameApp from './App'
import * as UserApi from './_DATA.js'
import User from './User'
/*
 *  Created by Akshay Niranjan
 *  Last Modified
 *  21 June 2021
*/
class Login extends Component{
  static propTypes = {
    users: PropTypes.array.isRequired
  }
  render() {
    return (
      <div>
        <h1>Select a user</h1>
        <div>
          <ol className="books-grid">
              {this.props.users.map(user => (
                  <User
                      user={user}
                  />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Login;
