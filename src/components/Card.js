import Header from './Header';
import CardPreview from './CardPreview';
import Share from './Share';
import Design from './Design';
import Fill from './Fill';

function Card(props) {
  return (
    <>
      <Header />
      <main className="main">
        <CardPreview
          dataCard={props.dataCard}
          avatar={props.avatar}
          updateAvatar={props.updateAvatar}
          handleReset={props.handleReset}
        />

        <section className="main__container">
          <Design
            dataCard={props.dataCard}
            handlePalette={props.handlePalette}
          />

          <Fill
            handleInput={props.handleInput}
            dataCard={props.dataCard}
            collapsable={props.collapsable}
            handleClickCollapse={props.handleClickCollapse}
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
          />

          <Share
            collapsable={props.collapsable}
            handleCreateCard={props.handleCreateCard}
            resultCard={props.resultCard}
            handleClickCollapse={props.handleClickCollapse}
          />

          {/* <!-- <div className="js-shareFieldset"> -->
      <!-- <fieldset className="share1"> -->
      <!-- <fieldset className="share2"> --> */}
        </section>
      </main>
    </>
  );
}

export default Card;
