import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../images/jokers_del_script.png'

function Landing () {
    return (<div id="landing">
    <section className="landing">
      <img
        className="landing__logo"
        src={Logo}
        alt="Logo"
        title=""
      />
      <h1 className="landing__title">Crea tu tarjeta de visita</h1>
      <p className="landing__description">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </p>
      <article className="landing__icons">
        <div>
          <i className="fa-regular fa-object-ungroup landing__icons--img"></i>
          <h4 className="landing__icons--text">Diseña</h4>
        </div>
        <div>
          <i className="fa-regular fa-keyboard landing__icons--img"></i>
          <h4 className="landing__icons--text">Rellena</h4>
        </div>
        <div>
          <i className="fa-solid fa-share-nodes landing__icons--img"></i>
          <h4 className="landing__icons--text">Comparte</h4>
        </div>
      </article>
      <Link className="landing__link" to="/card">Comenzar</Link>
    </section>
  </div>);
};

export default Landing;