import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dataApi from '../services/api';
import Footer from './Footer';
import Landing from './Landing';
import Card from './Card';

function App() {
  const [avatar, setAvatar] = useState('');
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
  const [resultCard, setResultCard] = useState({});
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };
  const handleClickCollapse = (ev) => {
    setCollapsable(!collapsable);
  };

  const handleInput = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    setDataCard({ ...dataCard, [inputName]: inputValue });
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
  };

  const handleCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => setResultCard(info));
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
              handleClickCollapse={handleClickCollapse}
              collapsable={collapsable}
              handleCreateCard={handleCreateCard}
              resultCard={resultCard}
              handleInput={handleInput}
              handleReset={handleReset}
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
