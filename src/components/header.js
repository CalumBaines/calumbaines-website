import React, { Component } from 'react';
import { Link } from 'react-router';

import styled from 'styled-components';
import logo from '../../assets/img/calumbaines-logo.png';
import twitter from '../../assets/img/twitter-logo.svg';
import linkedin from '../../assets/img/linkedin-logo.svg';
import github from '../../assets/img/github-logo.svg';


const Head = styled.header`
    background-color: white;
    border-bottom: 1px solid #C5C5C5;
    margin-bottom: 80px;
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
    margin-right: 16px;
`

const LogoLink = styled(Link)`
    display: inline-flex;
    border-right: 1px solid #F5F5F5;
    margin-right: 8px;
`

const SocialLink = styled.a`
    display: inline-flex;
    padding: 0 8px;

    &:hover {
        
    }
`

const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    a {
        font-family: Raleway-Bold;
        font-size: 14px;
        color: #656565;
        letter-spacing: 0;
        line-height: 14px;
        text-decoration: none;
        margin: 0 20px;
        padding: 0 8px;
        height: 100%;
        display: flex;
        align-items: center;
        
        &.active {
            border-bottom: 3px solid #656565;
            box-sizing: border-box;
        }

        &:last-of-type {
            margin-right: 0;
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
                <SocialLink href="#na">
                    <img src={twitter} />
                </SocialLink>
                <SocialLink href="#na">
                    <img src={linkedin} />
                </SocialLink>
                <SocialLink href="#na">
                    <img src={github} />
                </SocialLink>
            </HeaderLeft>
            <HeaderNav>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </HeaderNav>
        </HeaderContainer>
      </Head>
    );
  }
}

export default Header;