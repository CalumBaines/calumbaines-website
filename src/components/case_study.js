import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { Link } from 'react-router';
import styled, { css } from 'styled-components';
import SubscribeForm from './subscribe';

import { fetchCaseStudy } from '../actions/index';
import Asset from './asset';
import _ from 'lodash';

const ContentContainer = styled.section`
  width: calc(100% - 48px);
  max-width: 770px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0;
`

const TitleContainer = styled.div`
    width: calc(100% - 48px);
    max-width: 770px;
    margin: 80px auto 0;
    padding: 0 24px;
    text-align: center;
`

const MainImage = styled.div`
  width: calc(100% - 48px);
  max-width: 970px;
  margin: 0 auto;
  padding: 0 24px;

  img {
    width: 100%;
  }
`

const PostTitle = styled.h1`
  text-align: center;
  margin-bottom: 16px;
`

const WorkDesc = styled.p`
  text-align: center;
  margin-bottom: 32px;
  padding: 0 48px;
`

const Content = styled.div`
  padding: 0 48px;
  img {
    width: calc(100% + 96px);
    margin: 24px 0;
    margin-left: -48px;
  }
  blockquote {
    margin: 0 36px;
    padding: 16px;
    p {
      margin: 0;
      font-family: 'Playfair Display',serif;
      color: #8E8E8E;
      font-size: 24px;
      text-align: center;
    }
  }
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    li {
      padding-left: 1.5em;
      text-indent: -1.5em;
      line-height: 2;
      margin-bottom: 24px;

      &:before {
        content: "\f10c";
        margin-right: 16px;
        font-family: FontAwesome;
        font-size: 10px;
        color: #B993D6;
      }
    }
  }

  ol {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    counter-reset: counter;
    li {
      padding-left: 1.5em;
      text-indent: -1.5em;
      line-height: 2;
      margin-bottom: 24px;

      &:before {
        content: counter(counter);
        counter-increment: counter;
        margin-right: 16px;
        font-weight: 700;
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        line-height: 0;
        color: #B993D6;
      }
    }
  }
  h2, h3 {
    margin-top: 64px;
  }
`

const Cta = styled.div`
    margin: 40px auto 80px;
    text-align: center;
`

const Button = styled(Link)`
  display: inline-block;
  border-radius: 30px;
  padding: 12px 0;
  margin: 0.5rem 15px;
  width: 200px;
  background: transparent;
  color: blue;
  text-align: center;
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



class CaseStudy extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)
    const { slug } = this.props.params;
    // const id = '18mPLYXdfgqY44YSOYWeca';
    console.log(this.props.params + ' params');
    // console.log(slug);
    this.props.fetchCaseStudy(slug);
}
  renderMarkdown(content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  render() {
    const { caseStudy } = this.props;
    // console.log(caseStudy);
    // console.log(caseStudy.items['0'].fields.featuredImage.sys.id)      
    if (!caseStudy) {
      // console.log(post);
      return (
        <div className="Loader">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      );
    }
    // post['0'] = this.props.post.items;
    // console.log(post.items['0'].fields);
    
    return (
      <div>
        <TitleContainer>
          <PostTitle>{caseStudy.items['0'].fields.title}</PostTitle>
          <WorkDesc>{caseStudy.items['0'].fields.description}</WorkDesc>
        </TitleContainer>
        <MainImage>
          <Asset assetId={caseStudy.items['0'].fields.thumbnail.sys.id} keyCode={caseStudy.items['0'].fields.featuredImage.sys.id + caseStudy.items['0'].fields.date} />
        </MainImage>
        <ContentContainer>
          <Content>
            <Content dangerouslySetInnerHTML={this.renderMarkdown(caseStudy.items['0'].fields.content)} />  
            <br />
            <Cta>
              <Button 
                  to={"/work"}
                  primary 
              >
                  Back to all work
              </Button>
            </Cta>
          </Content>
        </ContentContainer>
        <SubscribeForm />
      </div>      
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.work.caseStudy + ' state work');
  return { caseStudy: state.work.caseStudy };
}

export default connect(mapStateToProps, { fetchCaseStudy })(CaseStudy);

