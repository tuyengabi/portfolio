import React, { Component } from 'react';
import './css/ContentSkill.scss';

class ContentSkill extends Component {
  render() {
    return  (
      <div className="contentSkill">
        <div className="tool">
          <ul className="toolDev">
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
          </ul>
          <ul className="toolDes">
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
          </ul>
        </div>
        <div className="skill">
          <h3 className="skillTitle">Travail en équipe:</h3>
          <p className="skillDetail">Facilité à s'intégrer dans une nouvelle équipe.</p>
          <h3 className="skillTitle">Autonomie:</h3>
          <p className="skillDetail">Prendre en charge son activité sans devoir être encadré de façon continue.</p>
          <h3 className="skillTitle">Force de proposition:</h3>
          <p className="skillDetail">Grâce à mon analyse et mon écoute, je suis force de proposition pour innover dans de nouvelles idées.</p>
          <h3 className="skillTitle">Prise de recul:</h3>
          <p className="skillDetail">Je peux faire preuve d'objectivité, à prendre de la distance pour analyser les faits, les situations et les interactions avant d'agir ou de prendre une décision.</p>
          <h3 className="skillTitle">Vonlonté d'apprendre:</h3>
          <p className="skillDetail">Définir un concept créatif en fonction du support choisi.</p>          
        </div>
      </div>
    )
    
  }
}

export default ContentSkill;
