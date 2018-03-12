import React, { Component } from 'react';

import styled from 'styled-components';
import LogoGrid from './logoGrid';
import calumLrg from '../../assets/img/about-lrg-image.png';
import SubscribeForm from './subscribe';


const Container = styled.div`
    width: calc(100% - 48px);
    max-width: 770px;
    margin: 80px auto 0;
    padding: 0 24px;
    @media only screen and (min-width: 768px) {
        display: flex;
    }
`

const Title = styled.h1`
    margin-bottom: 24px;
`
const TitleWrap = styled.div`
    text-align: left;
    padding-right: 20%;
    @media only screen and (min-width: 768px) {
        width: 70%;
        flex: 1.8;
    }
`

const ContactDetails = styled.div`
    @media only screen and (min-width: 768px) {
        width: 30%;
        margin-top: 100px;
        flex: 1;
    }
`

const ContactInfo = styled.p`
    margin: 0;
`


const Para = styled.p`
    margin-top: 0;
    font-size: 18px;
    line-height: 24px;
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





class Contact extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <div>
                <Container>
                    <TitleWrap>
                        <Title>Say hello</Title>
                        <Para>If you’re looking to hire me or have a chat about my latest blog post, I’d love to hear from you.</Para>
                        <Para>You can also sign-up to my newsletter to keep up to date with my latest work and articles.</Para>
                    </TitleWrap>
                    <ContactDetails>
                        <ContactInfo><b>T </b>07855 466485</ContactInfo>
                        <ContactInfo><b>E </b>calumrhysbaines@gmail.com</ContactInfo>
                    </ContactDetails>
                </Container>
                <SubscribeForm />                
            </div>
        );
    }
}

export default Contact;