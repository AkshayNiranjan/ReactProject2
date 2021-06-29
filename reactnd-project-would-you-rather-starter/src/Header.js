import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameApp from './App'
import * as UserApi from './_DATA.js'
import User from './User'
/*
 *  Created by Akshay Niranjan
 *  Last Modified
 *  29 June 2021
*/
class Header extends Component{
  render() {
    return (
      <div>
        <h1>Would You Rather?</h1>
        <div>
          <div class="tab">
            <button>Home</button>
            <button>Questions</button>
            <button>Leaderboard</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
