import '../styles/components/Share.scss';

function Share() {
  return (
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
  );
}

export default Share;
