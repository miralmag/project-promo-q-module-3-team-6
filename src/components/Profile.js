import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/joker_face.jpg';
import '../styles/components/Profile.scss';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div className="card__photo js__profile-image">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
