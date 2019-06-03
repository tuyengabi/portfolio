import React, { Component } from 'react';
import './App.css';
import About from './components/About.js'
import Skill from './components/Skill.js'
import Experience from './components/Experience.js'
import Education from './components/Education.js'
import Contact from './components/Contact.js'

class App extends Component {
  render() {
    return (
      <div>
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        <Education></Education>
        <Contact></Contact>
      </div>
    )

  }
}

export default App;