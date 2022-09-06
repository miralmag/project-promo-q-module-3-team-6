import { useState } from 'react';
import '../styles/components/Share.scss';

function Share(props) {
  const [collapsed, setCollapsed] = useState(true);
  const handleCreateCardShare = (ev) => {
    ev.preventDefault();
    setCollapsed(false);
    props.handleCreateCard();
  };

  const renderShareForm = () => {
    if (props.collapsableShare) {
      return (
        <>
          <div className="share1__container js-shareFieldset">
            <button
              className="share1__container--button js_shareBtn"
              onClick={handleCreateCardShare}
            >
              <i className="fa-solid fa-address-card"></i> Crear tarjeta
            </button>

            <p className="js_warning warning"></p>
          </div>

          <div
            className={`js_shareTwitter  ${
              collapsed === true && props.resultCard.sucess ? 'collapsed' : ''
            }`}
          >
            <p className="share2__p">
              La tarjeta ha sido creada:
              {props.resultCard.sucess
                ? props.resultCard.cardURL
                : props.resultCard.error}
            </p>

            <div className="share2">
              <a
                alt="linkCard"
                rel="noreferrer"
                className="share2__link js_link-card"
                href="https://awesome-profile-card.com?id=A456DF0001"
                target="_blank"
              ></a>
              <a
                rel="noreferrer"
                href="#"
                className="js_shareTwitterBtn"
                target="_blank"
              >
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
    <fieldset className="share1">
      <div
        className="share1__div js-share"
        id="share"
        onClick={props.handleClickCollapseShare}
      >
        <div className="header-container">
          <i className="fa-solid share1__div--icon fa-share-nodes"></i>
          <h3 className="share1__div--h3">Comparte</h3>
        </div>
        <i
          className={`share1__div--up fa-solid fa-chevron-up js-share-arrow ${
            props.rotate === true ? 'rotate' : ''
          }`}
        ></i>
      </div>

      {renderShareForm()}
    </fieldset>
  );
}

export default Share;
