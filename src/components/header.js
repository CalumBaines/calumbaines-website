import React, { Component } from 'react';
import { Link } from 'react-router';

import styled from 'styled-components';
import logo from '../../assets/img/calumbaines-logo.png';
import twitter from '../../assets/img/twitter-logo.svg';
import linkedin from '../../assets/img/linkedin-logo.svg';
import github from '../../assets/img/github-logo.svg';


const Head = styled.header`
    background-color: white;
    border-bottom: 1px solid #E7E7E7;
    width: 100%;
`

const HeaderContainer = styled.div`
    width: calc(100% - 48px);
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
`

const HeaderLeft = styled.div`
    margin-right: auto;
    padding: 16px 0;
    display: flex;
`

const Logo = styled.img`
    border-radius: 50%;
    height: 32px;
    width: 32px;
`

const LogoLink = styled(Link)`
    display: inline-flex;
    margin-right: 8px;
`

const SocialLink = styled.a`
    display: inline-flex;
    padding: 0 8px;

    &:hover {
        
    }
`

const HeaderRight = styled.div`

    display: none;
    @media only screen and (min-width: 768px) {
        margin-left: auto;
        padding: 16px 0;
        display: flex;
    }
`

const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    a {
        font-family: 'Raleway', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: #656565;
        letter-spacing: 0;
        line-height: 1;
        text-decoration: none;
        margin: 0 20px;
        padding: 0 8px;
        height: 100%;
        display: flex;
        align-items: center;
        @media only screen and (min-width: 768px) {
            font-size: 14px;
            line-height: 1;
        }
        &.active {
            border-bottom: 3px solid #656565;
            box-sizing: border-box;
        }
    }
`


class Header extends Component {
  render() {
    return(
      <Head>
        <HeaderContainer>
            <HeaderLeft>
                <LogoLink to={"/"}>
                    <Logo src={logo} />
                </LogoLink>
            </HeaderLeft>
            <HeaderNav>
                <Link to={"/work"}>Work</Link>
                {/* <Link to={"/journal"}>Journal</Link> */}
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </HeaderNav>
            <HeaderRight>
                <SocialLink target="_blank" href="https://twitter.com/calumbaines">
                    <img src={twitter} />
                </SocialLink>
                <SocialLink target="_blank" href="https://www.linkedin.com/in/calumbaines/">
                    <img src={linkedin} />
                </SocialLink>
                <SocialLink target="_blank" href="https://github.com/CalumBaines">
                    <img src={github} />
                </SocialLink>
            </HeaderRight>
        </HeaderContainer>
      </Head>
    );
  }
}

export default Header;