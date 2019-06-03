import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return  (
      <div>
        <div>
          <h3>Téléphone</h3>
          <p>07 82 26 87 89</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>tuyen.gabi@gmail.com</p>
        </div>
        <div>
          <h3>Site</h3>
          <p>www.tuyen.fr</p>
        </div>
        <div>
          <h3>Adresse</h3>
          <p>187 rue Ingres - 59100 Roubaix - France</p>
        </div>
        <div>
          <h3>Réseaux Sociaux</h3>
          <ul>
            <li>
              <a><img /></a>
            </li>
            <li>
              <a><img /></a>
            </li>
            <li>
              <a><img /></a>
            </li>
            <li>
              <a><img /></a>
            </li>
            <li>
              <a><img /></a>
            </li>
          </ul>
        </div>
      </div>
    )
    
  }
}

export default Contact;
