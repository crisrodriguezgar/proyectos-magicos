import '../styles/layout/Landing.scss';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <Link to="/project"><button className='landing_btn'>Nuevo proyecto</button></Link>
    </section>
  );
};

export default Landing;