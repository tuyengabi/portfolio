import React, { Component } from 'react';
import './css/ContentSkill.scss';
import htmlLogo from '../images/HTML5.png';
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
      <div className="contentSkill">
        <div className="tool">
          <h2 className="title-tool">Atouts</h2>
          <li className="html">
            <img className="logo" src={ htmlLogo }/>
          </li>
          <li className="css">
            <img className="logo" src={ cssLogo } />
          </li>
          <li className="js">
            <img className="logo" src={ jsLogo } />
          </li>
          <li className="vuejs">
            <img className="logo" src={ vuejsLogo } />
          </li>
          <li className="reactjs">
            <img className="logo" src={ reactjsLogo } />
          </li>
          <li className="vim">
            <img className="logo" src={ vimLogo } />
          </li>
          <li className="ai">
            <img className="logo" src={ aiLogo } />
          </li>
          <li className="ps">
            <img className="logo" src={ psLogo } />
          </li>
          <li className="draw">
            <img className="logo" src={ drawLogo } />
          </li>
          <li className="camera">
            <img className="logo" src={ cameraLogo } />
          </li>
        </div>
        <div className="quality">
          <h2 className="">Compétences</h2>
          <h3 className="qualityTitle">Travail en équipe:</h3>
          <p className="skillDetail">Facilité à s'intégrer dans une nouvelle équipe.</p>
          <h3 className="qualityTitle">Autonomie:</h3>
          <p className="skillDetail">Prendre en charge son activité sans devoir être encadré de façon continue.</p>
          <h3 className="qualityTitle">Force de proposition:</h3>
          <p className="skillDetail">Grâce à mon analyse et mon écoute, je suis force de proposition pour innover dans de nouvelles idées.</p>
          <h3 className="qualityTitle">Prise de recul:</h3>
          <p className="skillDetail">Je peux faire preuve d'objectivité, à prendre de la distance pour analyser les faits, les situations et les interactions avant d'agir ou de prendre une décision.</p>
          <h3 className="qualityTitle">Vonlonté d'apprendre:</h3>
          <p className="skillDetail">Définir un concept créatif en fonction du support choisi.</p>          
        </div>
      </div>
    )

  }
}

export default ContentSkill;
