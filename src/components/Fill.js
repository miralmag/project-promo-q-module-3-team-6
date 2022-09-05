import '../styles/components/Fill.scss';
import GetAvatar from './GetAvatar';
import '../styles/components/GetAvatar.scss';

function Fill(props) {
  const handleInput = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    props.handleInput(inputName, inputValue);
  };
  const renderFillForm = () => {
    if (props.collapsableFill) {
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
              value={props.dataCard.name}
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
              value={props.dataCard.job}
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
            <GetAvatar
              avatar={props.avatar}
              updateAvatar={props.updateAvatar}
            />

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
              value={props.dataCard.email}
            />

            <label htmlFor="phone">Teléfono</label>
            <input
              className="fill__form--imput js_inputTel"
              placeholder="Ej: 555-55-55-55"
              id="phone"
              type="tel"
              name="phone"
              onChange={handleInput}
              value={props.dataCard.phone}
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
              value={props.dataCard.linkedin}
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
              value={props.dataCard.github}
            />
          </form>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <fieldset className="fill">
      <div
        className="fill__title js-fill"
        id="fill"
        onClick={props.handleClickCollapseFill}
      >
        <div className="container">
          <i className="fill__title--icon fa-solid fa-keyboard"></i>
          <h3 className="fill__title--word">rellena</h3>
        </div>
        <i className="fill__title--chevron fa-solid fa-chevron-up js-fill-arrow"></i>
      </div>

      {renderFillForm()}
    </fieldset>
  );
}

export default Fill;
