import React, { Component } from 'react';

import styled, { css } from 'styled-components'


const Container = styled.div`
    width: calc(100% - 48px);
    max-width: 770px;
    margin: 40px auto 88px;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
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
    margin-bottom: 0;
`

const Meta = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 100%;
`

const Cta = styled.div`
    margin: 40px auto 0;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 30px;
  padding: 12px 0;
  margin: 0.5rem 15px;
  width: 200px;
  background: transparent;
  color: blue;
  border: 2px solid #E7E7E7;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: #4A4A4A;

  ${props => props.primary && css`
    background: #B993D6;
    border: 2px solid #B993D6;
    color: white;
  `}
`

class HomeBanner extends Component {
  render() {
    return(
        <div>
            <Container>
                <Title>I’m Calum Baines, a front end developer with a passion for design an understanding of CMS' and always strive to create the best user experience. </Title>
                {/* <Para>I work with companies ranging from startups to international corporations. I am currently working full time as a Front-end Developer in Sheffield but constantly on the look out for exciting opportunities and side projects to get stuck in to, so dont be afraid to get in touch.</Para> */}
                <Cta>
                    <Button 
                        href="#na"
                        primary 
                    >
                        Get in touch
                    </Button>
                    <Button 
                        href="#na"
                    >
                        View my work
                    </Button>
                </Cta>
            </Container>
        </div>
    );
  }
}

export default HomeBanner;