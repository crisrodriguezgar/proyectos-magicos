import logo from '../assets/logo-adalab.png';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header_left">
        <i className="fa-solid fa-laptop-code fa-2xl header_left-icon"></i>
        <p className="header_left-text">Proyectos Molones</p>
      </div>
      <img className="header_logo" src={logo} alt="Logo Adalab" />
    </header>
  );
};

export default Header;
