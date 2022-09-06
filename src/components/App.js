import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dataApi from '../services/api';
import Footer from './Footer';
import Landing from './Landing';
import Card from './Card';
import LocalStorage from '../services/localStorage';

function App() {
  const [avatar, setAvatar] = useState(LocalStorage.get('Avatar', ''));
  const [dataCard, setDataCard] = useState(
    LocalStorage.get('DataCard', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    })
  );
  console.log(dataCard);
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({ ...dataCard, photo: avatar });
    LocalStorage.set('Avatar', avatar);
  };

  const [collapsableShare, setCollapsableShare] = useState(false);
  const [collapsableFill, setCollapsableFill] = useState(false);
  const [collapsableDesign, setCollapsableDesign] = useState(true);
  const [resultCard, setResultCard] = useState({});
  const [rotateDesign, setRotateDesign] = useState(true);
  const [rotate, setRotate] = useState(false);
  const [rotateFill, setRotateFill] = useState(false);

  const handleClickCollapseDesign = () => {
    setCollapsableDesign(!collapsableDesign);
    setCollapsableFill(false);
    setCollapsableShare(false);
    setRotateDesign(!rotateDesign);
    setRotateFill(false);
    setRotate(false);
  };
  const handleClickCollapseFill = () => {
    setCollapsableFill(!collapsableFill);
    setCollapsableShare(false);
    setCollapsableDesign(false);
    setRotate(false);
    setRotateDesign(false);
    setRotateFill(!rotateFill);
  };
  const handleClickCollapseShare = () => {
    setCollapsableShare(!collapsableShare);
    setCollapsableFill(false);
    setCollapsableDesign(false);
    setRotate(!rotate);
    setRotateFill(false);
  };

  const handleInput = (inputName, inputValue) => {
    setDataCard({ ...dataCard, [inputName]: inputValue });
    console.log(dataCard);
    LocalStorage.set('DataCard', dataCard);
  };

  const handlePalette = (valueInputRadio) => {
    setDataCard({ ...dataCard, palette: valueInputRadio });
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

    setAvatar('');
    console.log(dataCard);

    LocalStorage.remove('DataCard');
    LocalStorage.remove('Avatar');
  };

  const handleCreateCard = (ev) => {
    dataApi(dataCard).then((info) => {
      setResultCard(info);
      LocalStorage.set('DataCard', dataCard);
    });
    console.log(resultCard.sucess ? resultCard.cardURL : resultCard.error);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/card"
          element={
            <Card
              avatar={avatar}
              updateAvatar={updateAvatar}
              dataCard={dataCard}
              handlePalette={handlePalette}
              handleClickCollapseShare={handleClickCollapseShare}
              collapsableShare={collapsableShare}
              handleCreateCard={handleCreateCard}
              resultCard={resultCard}
              handleInput={handleInput}
              handleReset={handleReset}
              collapsableDesign={collapsableDesign}
              handleClickCollapseDesign={handleClickCollapseDesign}
              handleClickCollapseFill={handleClickCollapseFill}
              collapsableFill={collapsableFill}
              rotateDesign={rotateDesign}
              rotate={rotate}
              rotateFill={rotateFill}
            />
          }
        />
      </Routes>

      <Footer />

      <script src="./assets/js/main.js"></script>
    </div>
  );
}

export default App;
