import PropTypes from 'prop-types';
import '../styles/layout/CardPreview.scss';
import defaultProject from '../assets/brujafondo.jpg';
import Card from './Card';

const CardPreview = ({ data }) => {
  const avatarProject = data.photo === '' ? defaultProject : data.photo;
  return (
    <section className="preview">
      <div
        className="preview_image"
        style={{ backgroundImage: `url(${avatarProject})` }}
      ></div>

      <Card data={data} />
    </section>
  );
};
CardPreview.propTypes = {
  data: PropTypes.object,
};

export default CardPreview;
