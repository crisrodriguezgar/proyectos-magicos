import logo from '../assets/logo-adalab.png';
import '../styles/layout/Footer.scss'

const Footer = () =>{
    return(
        <footer className="footer">
        <img className="footer_img" src={logo} alt="" />
      </footer>
    )
}
export default Footer;