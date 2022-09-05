import '../styles/components/Design.scss';

function Design(props) {
  const handlePalette = (ev) => {
    // ev.preventDefault();
    props.handlePalette(ev.target.value);
  };
 
  const renderDesign = () => {
    if (props.collapsableDesign) {
      return (
        <>
          <div className="election js-designFieldset">
            <h3 className="design__color">Colores</h3>
            <div className="election__options point">
              <label className="color-palet" htmlFor="colors1">
                <input
                  className="js_radio js_firstRadio"
                  id="1"
                  type="radio"
                  value="1"
                  name="palette"
                  checked={props.dataCard.palette === '1'}
                  onChange={handlePalette}
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
                  id="2"
                  type="radio"
                  value="2"
                  name="palette"
                  onChange={handlePalette}
                  checked={props.dataCard.palette === '2'}
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
                  id="3"
                  type="radio"
                  value="3"
                  name="palette"
                  onChange={handlePalette}
                  checked={props.dataCard.palette === '3'}
                />
                <div className="election__options rectangle">
                  <div className="rectangle-3__a"></div>
                  <div className="rectangle-3__b"></div>
                  <div className="rectangle-3__c"></div>
                </div>
              </label>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };
  return (
    <fieldset className="design">
      <div
        className="design__title js-design"
        id="design"
        onClick={props.handleClickCollapseDesign}
      >
        <div className="design__container">
          <i className="design__title--icon fa-regular fa-object-ungroup"></i>
          <h2 className="design__title--title">Diseña</h2>
        </div>
        <i className="design__title--icon2 fa-solid fa-chevron-up js-design-arrow rotate"></i>
      </div>
      {renderDesign()}
    </fieldset>
  );
}

export default Design;
