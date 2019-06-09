import React, { Component } from 'react';
import './App.scss';
import About from './components/About.js'
import Skill from './components/Skill.js'
import Experience from './components/Experience.js'
import Education from './components/Education.js'
import Contact from './components/Contact.js'
import ContentAbout from './components/ContentAbout.js'
import ContentSkill from './components/ContentSkill.js'
import ContentExperience from './components/ContentExperience.js'
import ContentEducation from './components/ContentEducation.js'
import ContentContact from './components/ContentContact.js'

class App extends Component {
  render() {
    return (
      <>
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        <Education></Education>
        <Contact></Contact>
        <ContentAbout></ContentAbout>
        <ContentSkill></ContentSkill>
        <ContentExperience></ContentExperience>
        <ContentEducation></ContentEducation>
        <ContentContact></ContentContact>
      </>
    )

  }
}

export default App;
