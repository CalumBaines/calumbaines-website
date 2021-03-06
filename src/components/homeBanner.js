import React, { Component } from 'react';
import { Link } from 'react-router';

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
    margin-bottom: 0;
    @media only screen and (min-width: 768px) {
        padding: 0 30px;
    }
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

const Button = styled(Link)`
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
                <Title>I’m Calum Baines, a Front-end Developer with a passion for design and UX, based in Sheffield. </Title>
                <Para>I work with companies ranging from startups to international corporations. I am currently working full time as a Front-end Developer in Sheffield but constantly on the look out for exciting opportunities and side projects to get stuck in to, so dont be afraid to get in touch.</Para>
                <Cta>
                    <Button 
                        to={"/contact"}
                        primary 
                    >
                        Get in touch
                    </Button>
                    <Button 
                        to={"/work"}
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