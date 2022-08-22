import logo from '../images/jokers_del_script.png';
import '../styles/components/Header.scss';

function Header() {
  return (
    <header className="second__header">
      <a href="./index.html">
        <img
          className="second__logo"
          src={logo}
          alt="logo-awesome-profile-cards"
          title="Logo Awesome Profile-Cards"
        />
      </a>
    </header>
  );
}

export default Header;
