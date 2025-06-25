import './Home.css';
import React from 'react';

const Home = () => {
  return (
    <div className="homeCont">
      <div className="titleCont">
        <video autoPlay loop muted playsInline className="video">
          <source src="/images/constrVid.mp4" type="video/mp4" />
        </video>
        <div className="titleText">
          <h1 className="roca">Roca</h1>
          <h1 className="constLLC">Construction LLC</h1>
          <h2>Robert DelGado & Carl Deworsop</h2>
        </div>
      </div>

      <div className="bodyCont">
        <div className="bodyTitle">
          <h1>Recent Projects</h1>
        </div>

        <div className="body1">
          <p>
            sdfsdddsfafrfnjfkhiufbkbciubciubciufbiubfciudbciubiucakgfbiuldksgaufgbkerugfsdbk,gfbek,sfbiskfbliusfkbiksbflibsdfsdddsfafrfnjfkhiufbkbciubciubciufbiubfciudbciubiucakgfbiuldksgaufgbkerugfsdbk,gfbek,sfbiskfbliusfkbiksbflibsdfsdddsfafrfnjfkhiufbkbciubciubciufbiubfciudbciubiucakgfbiuldksgaufgbkerugfsdbk,gfbek,sfbiskfbliusfkbiksbflibsdfsdddsfafrfnjfkhiufbkbciubciubciufbiubfciudbciubiucakgfbiuldksgaufgbkerugfsdbk,gfbek
          </p>
          <div className="slideShow">
            <img src="/images/Logo2.png" className="slidePic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
