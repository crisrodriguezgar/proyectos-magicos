import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Btn = ({ text, route }) => {
  return (
    <>
      <Link className="linkProject" to={`${route}`}>
        <section className="linkProject_project">
          <button className="linkProject_project-btn">{text}</button>
        </section>
      </Link>
    </>
  );
};
Btn.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
};
export default Btn;
