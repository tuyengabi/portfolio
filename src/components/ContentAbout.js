import React, { Component } from 'react';
import './css/ContentAbout.scss';

class ContentAbout extends Component {
  render() {
    return  (
      <section className="contentAbout">
        <h1 className="name">
          Tuyen Le
        </h1>
        <h3 className="job">
          DÉVELOPPEUSE FRONT-END <br /> 
          DESIGNER
        </h3>
        <h4 className="title">
          6 ans d’expérience dans le domaine du design!
        </h4>
        <p className="aboutme">
          Je m'appelle Tuyen . J'ai le désir de développer personnel et mes apprentisages. Par conséquent , la technologie et le design sont mes preférences. J'aimerais devenir une développeur pour satisfaire mon désir de connaissance.
        </p>
      </section>
    )
    
  }
}

export default ContentAbout;
