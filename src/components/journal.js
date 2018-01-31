import React, { Component } from 'react';

import styled from 'styled-components';
import PostsIndex from './posts_index';


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

const Meta = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 100%;
`

class Journal extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <div>
                <Container>
                    <Title>Journal</Title>
                    <Para><b>I’m a Designer and Developer who loves solving problems.</b></Para>
                    <Para>Working in the industry for the last five years I have been involved in a great range of projects and worked at a number of agencies based in the UK. </Para>
                </Container>
                {/* {this.renderPosts()} */}
            </div>
        );
    }
}

export default Journal;