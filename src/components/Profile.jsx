
import PropTypes from 'prop-types';
import defaultAvatar from '../assets/avatar.png';
import defaultProject from '../assets/cover.jpeg';
import '../styles/layout/Profile.scss';

function Profile({avatar, project}) {
  const avatarAutor = avatar === '' ? defaultAvatar : avatar;
  const avatarProject = project === '' ? defaultProject : project; 
  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatarAutor})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  project: PropTypes.string,
};

export default Profile;