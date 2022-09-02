import "../styles/App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import dataApi from "../services/api";
import Footer from "./Footer";
import Landing from "./Landing";
import Card from "./Card";

function App() {
  const [avatar, setAvatar] = useState("");
  const [collapsable, setCollapsable] = useState(false);
  const [dataCard, setDataCard] = useState({
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  });
  console.log(dataCard);
  const [resultCard, setResultCard] = useState({});
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({ ...dataCard, photo: avatar });
  };
  const handleClickCollapse = (ev) => {
    setCollapsable(!collapsable);
  };

  const handleInput = (inputName, inputValue) => {
    setDataCard({ ...dataCard, [inputName]: inputValue });
    console.log(dataCard);
  };

  const handlePalette = (valueInputRadio) => {
    setDataCard({ ...dataCard, palette: valueInputRadio });
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    console.log(dataCard);
  };

  const handleCreateCard = (ev) => {
    dataApi(dataCard).then((info) => {
      console.log(info);

      setResultCard(info);
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
