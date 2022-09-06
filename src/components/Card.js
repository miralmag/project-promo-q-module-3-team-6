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
            handleClickCollapseDesign={props.handleClickCollapseDesign}
            collapsableDesign={props.collapsableDesign}
            rotateDesign={props.rotateDesign}
            rotateFill={props.rotateFill}
          />

          <Fill
            handleInput={props.handleInput}
            dataCard={props.dataCard}
            handleClickCollapseFill={props.handleClickCollapseFill}
            collapsableFill={props.collapsableFill}
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
            rotate={props.rotate}
            rotateFill={props.rotateFill}
          />

          <Share
            collapsableShare={props.collapsableShare}
            handleCreateCard={props.handleCreateCard}
            resultCard={props.resultCard}
            handleClickCollapseShare={props.handleClickCollapseShare}
            rotate={props.rotate}
            rotateFill={props.rotateFill}
          />
        </section>
      </main>
    </>
  );
}

export default Card;
