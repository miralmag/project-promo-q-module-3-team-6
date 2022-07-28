import logo from '../images/jokers_del_script.png';
import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [collapsable, setCollapsable] = useState(false);
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  const [paletteNumber, setPaletteNumber] = useState('1');

  const handleClickCollapse = (ev) => {
    setCollapsable(!collapsable);
  };

  const handleInput = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    setDataCard({ ...dataCard, [inputName]: inputValue });
    setPaletteNumber(inputValue);
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };

  const renderFillForm = () => {
    if (collapsable) {
      return (
        <div className="js-fillFieldset js_allInputs">
          <form className="fill__form" action="#" method="post">
            <label htmlFor="name">
              {' '}
              Nombre completo<span>*</span>
            </label>

            <input
              className="fill__form--imput js_inputName js_input"
              placeholder="Ej: Sally Hill"
              id="name"
              type="text"
              name="name"
              required=""
              onChange={handleInput}
              value={dataCard.name}
            />

            <label htmlFor="job">
              Puesto<span>*</span>
            </label>
            <input
              className="fill__form--imput js_inputJob js_input"
              placeholder="Ej: Front-end unicorn"
              id="job"
              type="text"
              name="job"
              required=""
              onChange={handleInput}
              value={dataCard.job}
            />

            <p className="profileImgTitle">
              Imagen de perfil<span>*</span>
            </p>

            <div className="imgButton">
              <div className="action">
                <label className="action__upload-btn" htmlFor="profileImg">
                  Añadir imagen
                </label>
                <input
                  type="file"
                  name="profileImg"
                  id="profileImg"
                  className="action__hiddenField js__profile-upload-btn js_inputImg js_input"
                  required=""
                />
              </div>
              <div className="profile__preview js__profile-preview"></div>
            </div>

            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              className="fill__form--imput js_inputEmail js_input"
              placeholder="Ej: sally-hill@gmail.com"
              id="email"
              type="email"
              name="email"
              required=""
              onChange={handleInput}
              value={dataCard.email}
            />

            <label htmlFor="phone">Teléfono</label>
            <input
              className="fill__form--imput js_inputTel"
              placeholder="Ej: 555-55-55-55"
              id="phone"
              type="tel"
              name="phone"
              onChange={handleInput}
              value={dataCard.phone}
            />

            <label htmlFor="linkedin">
              LinkedIn<span>*</span>
            </label>
            <input
              className="fill__form--imput js_inputLinkedin js_input"
              placeholder="Ej: linkedin.com/in/sally-hill/"
              id="linkedin"
              type="text"
              name="linkedin"
              required=""
              onChange={handleInput}
              value={dataCard.linkedin}
            />

            <label htmlFor="github">
              Github <span>*</span>{' '}
            </label>
            <input
              className="fill__form--imput js_inputGithub js_input"
              placeholder="Ej: @sally-hill"
              id="github"
              type="text"
              name="github"
              required=""
              onChange={handleInput}
              value={dataCard.github}
            />
          </form>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderShareForm = () => {
    if (collapsable) {
      return (
        <>
          <div className="share1__container js-shareFieldset collapsed">
            <button className="share1__container--button js_shareBtn">
              <i className="fa-solid fa-address-card"></i> Crear tarjeta
            </button>
            <p className="js_warning warning"></p>
          </div>

          <div className="js_shareTwitter collapsed">
            {/* <!-- ^este div va con la clase share2 --> */}

            <p className="share2__p">La tarjeta ha sido creada:</p>

            <div className="share2">
              <a
                className="share2__link js_link-card"
                href="https://awesome-profile-card.com?id=A456DF0001"
                target="_blank"
              ></a>
              <a href="#" className="js_shareTwitterBtn" target="_blank">
                <button className="share2__button--twitter">
                  <i className="fa-brands fa-twitter"></i>Compartir en twitter
                </button>
              </a>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="App">
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

      <main className="main">
        <section className="main__preview">
          <button className="button js-reset-btn" onClick={handleReset}>
            <i className="fa-solid fa-bomb"></i>
            <p className="button__reset">Reset</p>
          </button>
          <aside
            className={`card js_preview-container palette-${paletteNumber}`}
          >
            <div className="card__info">
              <p className="card__info--name js_previewName" id="name">
                {dataCard.name || `Nombre apellidos`}
              </p>
              <p className="card__info--job js_previewJob" id="job">
                {dataCard.job || `Frontend Developer`}
              </p>
            </div>
            <div
              className="card__photo js__profile-image"
              id="profileImage"
            ></div>
            <ol className="rrss">
              <li className="rrss__list">
                <a
                  className="js_previewTel js_previewBtn"
                  id="phone"
                  href={`tel:${dataCard.phone}`}
                >
                  <i className="rrss__list--item fa-solid fa-mobile-screen fa-xl"></i>
                </a>
              </li>
              <li className="rrss__list">
                <a
                  target="_blank"
                  className="js_previewEmail js_previewBtn"
                  id="email"
                  href={`mailto:${dataCard.email}`}
                >
                  <i className="rrss__list--item fa-regular fa-envelope fa-xl"></i>
                </a>
              </li>
              <li className="rrss__list">
                <a
                  target="_blank"
                  className="js_previewLinkedin js_previewBtn"
                  id="linkedin"
                  href={`https://www.${dataCard.linkedin}`}
                >
                  <i className="rrss__list--item fa-brands fa-linkedin-in fa-xl"></i>
                </a>
              </li>
              <li className="rrss__list">
                <a
                  target="_blank"
                  className="js_previewGithub js_previewBtn"
                  id="github"
                  href={`https://github.com/${dataCard.github.slice(1)}`}
                >
                  <i className="rrss__list--item fa-brands fa-github-alt fa-xl"></i>
                </a>
              </li>
            </ol>
          </aside>
        </section>

        <section className="main__container">
          <fieldset className="design">
            <div className="design__title js-design" id="design">
              <div className="design__container">
                <i className="design__title--icon fa-regular fa-object-ungroup"></i>
                <h2 className="design__title--title">Diseña</h2>
              </div>
              <i className="design__title--icon2 fa-solid fa-chevron-up js-design-arrow rotate"></i>
            </div>

            <div className="election js-designFieldset">
              <h3 className="design__color">Colores</h3>
              <div className="election__options point">
                <label className="color-palet" htmlFor="colors1">
                  <input
                    className="js_radio js_firstRadio"
                    id="colors1"
                    type="radio"
                    value="1"
                    name="palette"
                    checked={dataCard.palette === '1'}
                    onChange={handleInput}
                  />
                  <div className="election__options rectangle">
                    <div className="rectangle-1__a"></div>
                    <div className="rectangle-1__b"></div>
                    <div className="rectangle-1__c"></div>
                  </div>
                </label>
              </div>

              <div className="election__options point">
                <label className="color-palet" htmlFor="colors2">
                  <input
                    className="js_radio"
                    id="colors2"
                    type="radio"
                    value="2"
                    name="palette"
                    onChange={handleInput}
                    checked={dataCard.palette === '2'}
                  />
                  <div className="election__options rectangle">
                    <div className="rectangle-2__a"></div>
                    <div className="rectangle-2__b"></div>
                    <div className="rectangle-2__c"></div>
                  </div>
                </label>
              </div>

              <div className="election__options point">
                <label className="color-palet" htmlFor="colors3">
                  <input
                    className="js_radio"
                    id="colors3"
                    type="radio"
                    value="3"
                    name="palette"
                    onChange={handleInput}
                    checked={dataCard.palette === '3'}
                  />
                  <div className="election__options rectangle">
                    <div className="rectangle-3__a"></div>
                    <div className="rectangle-3__b"></div>
                    <div className="rectangle-3__c"></div>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className="fill">
            <div
              className="fill__title js-fill"
              id="fill"
              onClick={handleClickCollapse}
            >
              <div className="container">
                <i className="fill__title--icon fa-solid fa-keyboard"></i>
                <h3 className="fill__title--word">rellena</h3>
              </div>
              <i className="fill__title--chevron fa-solid fa-chevron-up js-fill-arrow"></i>
            </div>

            {renderFillForm()}
          </fieldset>

          <fieldset className="share1">
            <div
              className="share1__div js-share"
              id="share"
              onClick={handleClickCollapse}
            >
              <div className="header-container">
                <i className="fa-solid share1__div--icon fa-share-nodes"></i>
                <h3 className="share1__div--h3">Comparte</h3>
              </div>
              <i className="share1__div--up fa-solid fa-chevron-up js-share-arrow"></i>
            </div>

            {renderShareForm()}
          </fieldset>

          {/* <!-- <div className="js-shareFieldset"> -->
        <!-- <fieldset className="share1"> -->
        <!-- <fieldset className="share2"> --> */}
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">Awesome profile-cards © 2022</p>
        <img
          className="footer__logo"
          src="./assets/images/logo-adalab-red.png"
          alt="Logo"
        />
      </footer>

      <script src="./assets/js/main.js"></script>
    </div>
  );
}

export default App;
