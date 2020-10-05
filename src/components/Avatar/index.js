import React from 'react';
import PropTypes from 'prop-types';
import Girl from '../../images/avater.png'
import './style.css';


function Avatar({ name, avatar }) {
  return (
    <div className="cwv-avatar">
      <img
        width="45"
        alt={name}
        src={Girl}
      />
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Avatar;
