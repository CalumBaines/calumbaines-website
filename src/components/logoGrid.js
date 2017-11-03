import React, { Component } from 'react';
import { Link } from 'react-router';

import styled from 'styled-components';
import interled from '../../assets/img/grid-interled.png';
import interledLogo from '../../assets/img/grid-interled-logo.png';
import kingspan from '../../assets/img/grid-kingspan.png';
import kingspanLogo from '../../assets/img/grid-kingspan-logo.png';
import resone from '../../assets/img/grid-residenceone.png';



const Container = styled.section`
    width: calc(100% - 48px);
    max-width: 970px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 3fr 3fr 4fr;
    grid-template-rows: 310px 310px;
    grid-gap: 30px;
    margin-bottom: 88px;
    @media (max-width: 700px) {
		grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 300px 1fr;
    }
`
const ImageWrap = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    &.InterLed {
        grid-column: 1 / 3;
        @media (max-width: 700px) {
            grid-column: auto;
        }
    }

    &.Kingspan {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.ResOne {
        grid-column: 2 / 4;
        @media (max-width: 700px) {
            grid-column: auto;
        }
    }
`

const Logo = styled.img`
    position: absolute;

    &.KingspanLogo {
        width: 30%;
    }
    &.InterLedLogo {
        right: 32px;
        top: 24px;
        width: 70px;
    }
`
const BgImg = styled.img`
    position: absolute;
    min-width: 100%;
    z-index: -1;
    min-height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`

const QuoteContainer = styled.div`
    display: flex;

`

const Quote = styled.blockquote`
    margin: 0;
    margin-top: auto;
    position: relative;
    
    &:before {
        content: '“';
        position: absolute;
        font-family: 'Playfair Display', serif;
        font-size: 144px;
        color: #EFEFEF;
        z-index: -1;
        top: -40px;
        left: -5px;
    }

    p {
        margin-left: 10px;
    }
`

const Name = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #4A4A4A;    
`

const Position = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    color: #4A4A4A;
`



class LogoGrid extends Component {
  render() {
    return(
        <Container>
            <ImageWrap className="InterLed">
                <Logo className="InterLedLogo" src={interledLogo} />
                <BgImg src={interled} />
            </ImageWrap>
            <QuoteContainer>
                <Quote>
                    <p>Currently working as a Front-end Developer at Quba, an agency based in Sheffield. I have worked at a number of different agencies and a range of projects over the past couple of years. </p>
                    <Name>Nigel Wills</Name>
                    <Position>Managing Director</Position>
                </Quote>
            </QuoteContainer>
            <ImageWrap className="Kingspan">
                <Logo className="KingspanLogo" src={kingspanLogo} />
                <BgImg src={kingspan} />
            </ImageWrap>
            <ImageWrap className="ResOne">
                <BgImg src={resone} />
            </ImageWrap>
        </Container>
    );
  }
}

export default LogoGrid;