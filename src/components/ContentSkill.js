import React, { Component } from 'react';
import './css/ContentSkill.scss';
import htmlLogo from '../images/HTML.png';
import cssLogo from '../images/CSS.png';
import jsLogo from '../images/JS.png';
import vuejsLogo from '../images/VUEJS.png';
import reactjsLogo from '../images/REACT.png';
import vimLogo from '../images/VIM.png';
import psLogo from '../images/PS.png';
import aiLogo from '../images/AI.png';
import drawLogo from '../images/DRAW.png';
import cameraLogo from '../images/CAMERA.png';

class ContentSkill extends Component {
  render() {
    return  (
      <section className="contentSkill">
        <div className="tool">
          <h2 className="toolTitle center-middle">Atouts</h2>
          <figure className="html center-middle">
            <img className="logo" src={ htmlLogo }/>
          </figure>
          <figure className="css center-middle">
            <img className="logo" src={ cssLogo } />
          </figure>
          <figure className="js center-middle">
            <img className="logo" src={ jsLogo } />
          </figure>
          <figure className="vuejs center-middle">
            <img className="logo" src={ vuejsLogo } />
          </figure>
          <figure className="reactjs center-middle">
            <img className="logo" src={ reactjsLogo } />
          </figure>
          <figure className="vim center-middle">
            <img className="logo" src={ vimLogo } />
          </figure>
          <figure className="ai center-middle">
            <img className="logo" src={ aiLogo } />
          </figure>
          <figure className="ps center-middle">
            <img className="logo" src={ psLogo } />
          </figure>
          <figure className="draw center-middle">
            <img className="logo" src={ drawLogo } />
          </figure>
          <figure className="camera center-middle">
            <img className="logo" src={ cameraLogo } />
          </figure>
        </div>

        <div className="quality center-middle">
          <h2 className="qualityTitle center-middle">Compétences</h2>
          <h3 className="qualityList">Travail en équipe:</h3>
          <p className="qualityDetail">Facifigureté à s'intégrer dans une nouvelle équipe.</p>
          <h3 className="qualityList">Autonomie:</h3>
          <p className="qualityDetail">Prendre en charge son activité sans devoir être encadré de façon continue.</p>
          <h3 className="qualityList">Force de proposition:</h3>
          <p className="qualityDetail">Grâce à mon analyse et mon écoute, je suis force de proposition pour innover dans de nouvelles idées.</p>
          <h3 className="qualityList">Prise de recul:</h3>
          <p className="qualityDetail">Je peux faire preuve d'objectivité, à prendre de la distance pour analyser les faits, les situations et les interactions avant d'agir ou de prendre une décision.</p>
          <h3 className="qualityList">Vonlonté d'apprendre:</h3>
          <p className="qualityDetail">Définir un concept créatif en fonction du support choisi.</p>          
        </div>
      </section>
    )

  }
}

export default ContentSkill;
