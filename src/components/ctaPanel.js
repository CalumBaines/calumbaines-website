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
    padding: 24px;
    @media only screen and (min-width: 768px) {
        padding: 96px 20%;
    }
`

const CtaTitle = styled.h2`
    font-size: 24px;
    color: #FFFFFF;
    line-height: 1.3;
    text-align center;
    margin-top: 0;
    margin-bottom: 16px;
    @media only screen and (min-width: 768px) {
        font-size: 36px;
        line-height: 48px;
    }
`

const CtaSub = styled.p`
    color: white;
    text-align center;
    margin: 0;
    margin-bottom: 32px;
    padding: 0;
    box-sizing: border-box;
    @media only screen and (min-width: 768px) {
        padding: 0 80px;
    }
`

const Button = styled(Link)`
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
                    Please get in touch. I am always looking for exciting projects to work on.
                </CtaSub>
                <Button 
                to={"/contact"}
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