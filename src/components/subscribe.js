import React, { Component } from 'react';

import styled from 'styled-components';
import twitter from '../../assets/img/twitter-logo.svg';
import linkedin from '../../assets/img/linkedin-logo.svg';
import github from '../../assets/img/github-logo.svg';

const Container = styled.div`
    width: calc(100% - 48px);
    max-width: 650px;
    margin: 80px auto 0;
    padding: 0 24px;
    text-align: center;
`

const SubscribeTitle = styled.h1`
    padding-top: 112px;
    margin-bottom: 16px;
    font-size: 32px;
`

const SubscribePara = styled.p`
    margin-top: 0;
    font-size: 16px;
    line-height: 24px;
    padding: 0 30px;
`

const SubscribeBg = styled.div`
    background-color: #F5F5F5;
`

const SubscribeField = styled.input`
    padding: 24px 32px;
    border-radius: 100px;
    border: none;
    background-color: #ECECEC;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
`

const SubscribeLabel = styled.label`
    display: inline-block;
    width: 60%;
    margin-right: 30px;
    @media only screen and (min-width: 768px) {
        width: 70%;
    }
`

const SubFormContainer = styled.form`
    width: calc(100% - 48px);
    max-width: 600px;
    margin: 0 auto;
    padding: 32px 24px 136px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`

const SubscribeButton = styled.input`
    border: none;
    background-color: #171717;
    padding: 24px;
    display: inline-block;
    color: white;
    border-radius: 100px;
    width: calc(40% - 30px);
    @media only screen and (min-width: 768px) {
        width: calc(30% - 30px);
    }
`

const SocialFooter = styled.div`
    width: calc(100% - 48px);
    max-width: 600px;
    margin: 0 auto;
    padding: 0 24px 32px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const SocialLink = styled.a`
    display: inline-flex;
    padding: 0 8px;

    &:hover {
        
    }
`

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
    };
  }

    render() {
        return (
            <SubscribeBg>
                <Container>
                    <SubscribeTitle>Newsletter</SubscribeTitle>
                    <SubscribePara>Subscribe to my newsletter to recieve my latest articles, experiments and inspiration in your inbox.</SubscribePara>
                </Container>
                <SubFormContainer action="https://calumbaines.us11.list-manage.com/subscribe/post?" method="POST" noValidate>
                <input type="hidden" name="u" value="6a526e38cd2ed0617d291eaff"/>
                <input type="hidden" name="id" value="d6fdb98678"/>
                <SubscribeLabel htmlFor='MERGE0'>
                    <SubscribeField
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        placeholder="Email Address"
                        value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                     /> 
                </SubscribeLabel>
                <SubscribeButton type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="Email Address" id="b_email"/>
                </div>
              </SubFormContainer>
              <SocialFooter>
                <SocialLink target="_blank" href="https://twitter.com/calumbaines">
                    <img src={twitter} />
                </SocialLink>
                <SocialLink target="_blank" href="https://www.linkedin.com/in/calumbaines/">
                    <img src={linkedin} />
                </SocialLink>
                <SocialLink target="_blank" href="https://github.com/CalumBaines">
                    <img src={github} />
                </SocialLink>
            </SocialFooter>
            </SubscribeBg>
        )
    }
}

export default SubscribeForm