import React, { Component } from 'react';
import converlienceLogo from '../images/logoCONVER.png';
import losfizioLogo from '../images/logoLOSFIZIO.png';
import githubLogo from '../images/logoGITHUB.png';

class ContentExperience extends Component {
  render() {
    return  (
      <section className="ContentExperience">
        <h3 className="expTitle">EXPÉRIENCES</h3>
        <div className="exp">
          <h4 className="year">2014 - 08/2018</h4>
          <p>
            Serveuse de restaurant <br /> 
            Prothésiste ongulaire - Paris - France.
          </p>
          <p>
            Employée Polyvalente Hotel Le Tadorne <br />
            Ouvrières d'agricole - Aube - France.
          </p>
          <h4 className="year">2009 - 2013</h4>
          <p>
            Chef Designer de mode société NMN <br />
            secteur D'industrie de Textile et Uniform - Hochiminh - Vietnam
          </p>
          <h4 className="year">2007 - 2009</h4>
          <p>
            Designer de mode société TAS <br /> 
            secteur Événementiel - Hochiminh - Vietnam
          </p>
        </div>
        <h3 className="projectTitle">PROJETS</h3>
        <figure className="project">
          <h4 className="projectName">Converlience</h4>
          <a><img className="projectLogo" src={ converlienceLogo } /></a>
          <h4 className="projectName">LoSfizio</h4>
          <a><img className="projectLogo" src={ losfizioLogo } /></a>
          <h4 className="projectName">Voir plus sur mon Github:</h4>
          <a><img className="projectLogo" src={ githubLogo } /></a>
        </figure>
      </section>
    )
    
  }
}

export default ContentExperience;
