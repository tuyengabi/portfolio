import React, { Component } from 'react';
import './App.css';
import About from './components/About.js'
import Skill from './components/Skill.js'
import Experience from './components/Experience.js'
import Education from './components/Education.js'
import Contact from './components/Contact.js'
import Contentabout from './components/Contentabout.js'
import Contentskill from './components/Contentskill.js'
import Contentexperience from './components/Contentexpenrience.js'
import Contenteducation from './components/Contenteducation.js'
import Contentcontact from './components/Contentcontact.js'

class App extends Component {
  render() {
    return (
      <div>
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        <Education></Education>
        <Contact></Contact>
        <Contentabout></Contentabout>
        <Contentskill></Contentskill>
        <Contentexperience></Contentexperience>
        <Contenteducation></Contenteducation>
        <Contentcontact></Contentcontact>
      </div>
    )

  }
}

export default App;
