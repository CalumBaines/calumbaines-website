import React, { Component } from 'react';

import styled from 'styled-components';

const TitleBlock = styled.section`
    grid-row: span 2;
`

const Container = styled.div`
    width: calc(100% - 48px);
    max-width: 770px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h1`
    margin-bottom: 24px;
`

const Para = styled.p`
    margin-top: 0;
`

class Footer extends Component {
  render() {
    return(
        <TitleBlock>
            <Container>
                <Title>I develop accessible, modular based Front-end code, that scales with your business.</Title>
                <Para>Currently working as a Front-end Developer at Quba, an agency based in Sheffield. I have worked at a number of different agencies and benn involved in a range of projects over the past couple of years. <br /> <br /> I have a passion for creating reusable, accessible and modular code, using the latest techniques and technology I am constantly improving my skills and looking for better ways to work. </Para>
            </Container>
        </TitleBlock>
    );
  }
}

export default Footer;