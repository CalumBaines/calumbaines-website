import React, { Component } from 'react';
import { Link } from 'react-router';

import styled from 'styled-components';


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
    background-color: white;
    padding: 20px 40px;
    text-decoration: none;
    color: #B993D6;
    border: 1px solid white;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 2px;
    transition: .4s all ease-in-out;

    &:hover {
        background-color: transparent;
        color: white;
    }
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
                <Button href="#na">
                    GET IN TOUCH
                </Button>
            </CtaWrap>
        </Cta>
    );
  }
}

export default CtaPanel;