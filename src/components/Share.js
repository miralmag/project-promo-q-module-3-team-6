import '../styles/components/Share.scss';

function Share(props) {
  const renderShareForm = () => {
    if (props.collapsable) {
      return (
        <>
          <div className="share1__container js-shareFieldset">
            <button
              className="share1__container--button js_shareBtn"
              onClick={props.handleCreateCard}
            >
              <i className="fa-solid fa-address-card"></i> Crear tarjeta
            </button>
            <h1>
              {props.resultCard.sucess
                ? props.resultCard.cardURL
                : props.resultCard.error}
            </h1>
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
    <fieldset className="share1">
      <div
        className="share1__div js-share"
        id="share"
        onClick={props.handleClickCollapse}
      >
        <div className="header-container">
          <i className="fa-solid share1__div--icon fa-share-nodes"></i>
          <h3 className="share1__div--h3">Comparte</h3>
        </div>
        <i className="share1__div--up fa-solid fa-chevron-up js-share-arrow"></i>
      </div>

      {renderShareForm()}
    </fieldset>
  );
}

export default Share;
