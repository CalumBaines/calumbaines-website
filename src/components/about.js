import React, { Component } from 'react';

import styled from 'styled-components';
import LogoGrid from './logoGrid';
import calumLrg from '../../assets/img/about-lrg-image.png';


const Container = styled.div`
    width: calc(100% - 48px);
    max-width: 770px;
    margin: 80px auto 0;
    padding: 0 24px;
    text-align: center;
`

const Title = styled.h1`
    margin-bottom: 24px;
`

const Para = styled.p`
    margin-top: 0;
    font-size: 18px;
    line-height: 24px;
    padding: 0 30px;
`

const ParaHalf = styled.p`
    margin-top: 0;
    font-size: 18px;
    line-height: 24px;
    padding: 0 30px;
    column-count: 2;
    column-gap: 30px;
    text-align: left;

    br {
        content: "";
        margin: 24px;
        display: block;
        font-size: 24px;
    }
`

const Meta = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 100%;
`

const AboutImg = styled.div`
    width: calc(100% - 48px);
    max-width: 970px;
    margin: 0 auto;
    padding: 0 24px;
    margin-top: 136px;
    img {
        width: 100%;
    }
`

class About extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <div>
                <Container>
                    <Title>About me</Title>
                    <Para><b>I’m a Designer and Developer who loves solving problems.</b></Para>
                    <Para>Working in the industry for the last five years I have been involved in a great range of projects and worked at a number of agencies based in the UK. </Para>
                </Container>
                <AboutImg>
                    <img src={calumLrg} />
                </AboutImg>
                <Container>
                    <ParaHalf>Currently working as a Front-end Developer at an agency based in Sheffield. I have worked at a number of different agencies and been involved in a range of projects over the years. My experiences with clients range from global corporations to local businesses, including: NHS, Residence One, Taylor Wimpey, InterLED, Joris Ide, Imeche, Efficiency North, Ruddocks and Kingspan. <br/> I’m always on the lookout for exciting projects and great people to work with, please get in touch if you think we could work together in anyway or even want to contact me about something random. <br /> My work revolves around one simple rule ‘KEEP IT SIMPLE’. <br />In this industry we often try to over complicate everything to achieve the best but in reality the most simple ideas are often the best. <br /> I have a passion for creating reusable, accessible and modular code, using the latest techniques and technology I am constantly improving my skills and looking for better ways to work. </ParaHalf>
                </Container>
                <LogoGrid />
            </div>
        );
    }
}

export default About;