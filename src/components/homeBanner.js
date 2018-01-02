import React, { Component } from 'react';

import styled from 'styled-components';


const Container = styled.div`
    width: calc(100% - 48px);
    max-width: 770px;
    margin: 80px auto 0;
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
`

const Meta = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 100%;
`

class HomeBanner extends Component {
  render() {
    return(
        <div>
            <Container>
                <Title>I’m Calum Baines, a User Experience Designer & Front-end Developer based in Sheffield, UK. </Title>
                <Para>I work with companies ranging from startups to international corporations. I am currently working full time as a Front-end Developer in Sheffield but constantly on the look out for exciting opportunities and side projects to get stuck in to, so dont be afraid to get in touch.</Para>
                <Meta>Subscribe to my newsletter to recieve my latest articles, experiments and inspiration in your inbox.</Meta>
            </Container>
        </div>
    );
  }
}

export default HomeBanner;