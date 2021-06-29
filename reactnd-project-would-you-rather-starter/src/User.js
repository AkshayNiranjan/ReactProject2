import React from 'react';
import PropTypes from 'prop-types';

/*
 *  Created by Akshay Niranjan
 *  Last Modified
 *  21 June 2021
*/

const User = props => {
  const {user} = props;
  return (
      <li>
          <div className="user">
              <div
                  className="user-avatar"
                  style={{ backgroundImage: user.avatarURL }}
              />
              <div className="user-info">{user.name}</div>
          </div>
      </li>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired
}
export default User;
