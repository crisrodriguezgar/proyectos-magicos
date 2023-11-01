import { Link } from 'react-router-dom';
import logo from '../assets/logo-adalab.png';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <div className='header_left'>
          <i className="fa-solid fa-cat fa-2xl header_left-icon"></i>
          <p className='header_left-text'>Proyectos Mágicos</p>
        </div>
      </Link>
      <img className='header_logo' src={logo} alt='Logo Adalab' />
    </header>
  );
};

export default Header;