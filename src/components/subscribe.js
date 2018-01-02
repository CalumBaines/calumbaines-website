import React, { Component } from 'react';

import styled from 'styled-components';

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
    width: 70%;
    margin-right: 30px;

`

const SubFormContainer = styled.form`
    width: calc(100% - 48px);
    max-width: 600px;
    margin: 32px auto 0;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    display: flex;
    margin-bottom: 136px;
`

const SubscribeButton = styled.input`
    border: none;
    background-color: #171717;
    padding: 24px;
    display: inline-block;
    color: white;
    width: calc(30% - 30px);
    border-radius: 100px;
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
            <div>
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
            </div>
        )
    }
}

export default SubscribeForm