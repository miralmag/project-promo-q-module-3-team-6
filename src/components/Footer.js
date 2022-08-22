import '../styles/components/Footer.scss';
import LogoRed from '../images/logo-adalab-red.png';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">Awesome profile-cards © 2022</p>
      <img className="footer__logo" src={LogoRed} alt="Logo" />
    </footer>
  );
}

export default Footer;
