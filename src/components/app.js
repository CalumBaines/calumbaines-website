import React, { Component } from 'react';
import Header from './header';

import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900|Raleway:400,400i,500,500i,600,600i,700,700i');
  @import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');
  
  p, li, span, a {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 2;
    color: #4A4A4A;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
    color: #4A4A4A;  
  }

  h1 {
    font-size: 32px;
    line-height: 1;
    margin-bottom: 24px;
    @media only screen and (min-width: 768px) {
      font-size: 41px;
      line-height: 50px;
      margin-bottom: 24px;
    }
  }

  .Loader {
    position: absolute;
    z-index: 10;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .sk-folding-cube {
    margin: 20px auto;
    width: 40px;
    height: 40px;
    position: relative;
    -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
  }
  
  .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1); 
  }
  .sk-folding-cube .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #B993D6;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
            animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  .sk-folding-cube .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
            transform: scale(1.1) rotateZ(90deg);
  }
  .sk-folding-cube .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
            transform: scale(1.1) rotateZ(180deg);
  }
  .sk-folding-cube .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
            transform: scale(1.1) rotateZ(270deg);
  }
  .sk-folding-cube .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
  .sk-folding-cube .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s; 
  }
  .sk-folding-cube .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }
  @-webkit-keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
              transform: perspective(140px) rotateX(-180deg);
      opacity: 0; 
    } 25%, 75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
      opacity: 1; 
    } 90%, 100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
              transform: perspective(140px) rotateY(180deg);
      opacity: 0; 
    } 
  }
  
  @keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
              transform: perspective(140px) rotateX(-180deg);
      opacity: 0; 
    } 25%, 75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
              transform: perspective(140px) rotateX(0deg);
      opacity: 1; 
    } 90%, 100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
              transform: perspective(140px) rotateY(180deg);
      opacity: 0; 
    }
  }
`

export default class App extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
