import '../styles/components/Preview.scss';

function CardPreview(props) {
  return (
    <section className="main__preview">
      {/* <button className="button js-reset-btn" onClick={handleReset}>
        <i className="fa-solid fa-bomb"></i>
        <p className="button__reset">Reset</p>
      </button> */}
      <aside
        className={`card js_preview-container palette-${props.dataCard.palette}`}
      >
        <div className="card__info">
          <p className="card__info--name js_previewName" id="name">
            {props.dataCard.name || `Nombre apellidos`}
          </p>
          <p className="card__info--job js_previewJob" id="job">
            {props.dataCard.job || `Frontend Developer`}
          </p>
        </div>
        <div className="card__photo js__profile-image" id="profileImage"></div>
        <ol className="rrss">
          <li className="rrss__list">
            <a
              className="js_previewTel js_previewBtn"
              id="phone"
              href={`tel:${props.dataCard.phone}`}
            >
              <i className="rrss__list--item fa-solid fa-mobile-screen fa-xl"></i>
            </a>
          </li>
          <li className="rrss__list">
            <a
              rel="noreferrer"
              target="_blank"
              className="js_previewEmail js_previewBtn"
              id="email"
              href={`mailto:${props.dataCard.email}`}
            >
              <i className="rrss__list--item fa-regular fa-envelope fa-xl"></i>
            </a>
          </li>
          <li className="rrss__list">
            <a
              rel="noreferrer"
              target="_blank"
              className="js_previewLinkedin js_previewBtn"
              id="linkedin"
              href={`https://www.${props.dataCard.linkedin}`}
            >
              <i className="rrss__list--item fa-brands fa-linkedin-in fa-xl"></i>
            </a>
          </li>
          <li className="rrss__list">
            <a
              rel="noreferrer"
              target="_blank"
              className="js_previewGithub js_previewBtn"
              id="github"
              href={`https://github.com/${props.dataCard.github.slice(1)}`}
            >
              <i className="rrss__list--item fa-brands fa-github-alt fa-xl"></i>
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
}

export default CardPreview;
