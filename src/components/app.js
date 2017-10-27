import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900|Raleway:400,400i,500,500i,600,600i,700,700i');
  
  p {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: #4A4A4A;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
    color: #4A4A4A;  
  }

  h1 {
    font-size: 48px;
    line-height: 60px;
  }
`

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
