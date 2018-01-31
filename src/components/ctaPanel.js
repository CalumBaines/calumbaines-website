import React, { Component } from 'react';
import { Link } from 'react-router';

import styled, { css } from 'styled-components';


const Cta = styled.section`
    width: calc(100% - 48px);
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 24px;
    margin-bottom: 80px;
`

const CtaWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-image: linear-gradient(-229deg, #B993D6 3%, #8CA6DB 98%);
    padding: 96px 20%;
`

const CtaTitle = styled.h2`
    font-size: 36px;
    color: #FFFFFF;
    line-height: 48px;
    text-align center;
    margin-top: 0;
    margin-bottom: 16px;
`

const CtaSub = styled.p`
    color: white;
    text-align center;
    margin: 0;
    margin-bottom: 32px;
    padding: 0 80px;
    box-sizing: border-box;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 30px;
  padding: 12px 0;
  margin: 0.5rem 15px;
  width: 200px;
  background: transparent;
  color: blue;
  border: 2px solid white;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: #4A4A4A;
  text-align: center;

  ${props => props.primary && css`
    background: white;
    border: 2px solid white;
    color: #B993D6;
  `}
`


class CtaPanel extends Component {
  render() {
    return(
        <Cta>
            <CtaWrap>
                <CtaTitle>
                    Have a project you think I might be interested in? 
                </CtaTitle>
                <CtaSub>
                    Currently working as a Front-end Developer at Quba, an agency based in Sheffield. I have worked at a number of different agencies and a range of projects.
                </CtaSub>
                <Button 
                href="#na"
                primary 
            >
                Get in touch
            </Button>
            </CtaWrap>
        </Cta>
    );
  }
}

export default CtaPanel;