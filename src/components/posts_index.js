import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import TitleBlock from './titleBlock';
import CtaPanel from './ctaPanel';
import LogoGrid from './logoGrid';
import HomeBanner from './homeBanner';
import SubscribeForm from './subscribe';
import _ from 'lodash';
import styled from 'styled-components';

import { fetchPosts } from '../actions/index';
import Asset from './asset';


const Spotlight = styled(Link)`
  text-decoration: none;
  display: flex;
  border: 1px solid rgba(197,197,197,0.5);
  border-radius: 4px;
  min-height: 250px;
  background-color: white;
  cursor: pointer;
  transform: translateY(0px);
  box-shadow: 0 0px 0px 0 rgba(104,104,104,0.15);
  transition: .3s all ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px 0 rgba(104,104,104,0.15);
  }

  @media (min-width: 900px) {
    &.Spotlight:nth-of-type(1) {
      grid-row: span 2;
      flex-flow: row wrap;
      > div {
        &:first-of-type {
          min-height: 50%;
          border-radius: 4px 4px 0 0;
        }
        &:last-of-type {
          border-top: 0;
          > div {
            width: 100%;
          }
        }
      }
    }
  }
`

const ContentWrap = styled.div`
  width: 150%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 0 4px 4px 0;  
  display: flex;
  flex-flow: row wrap;
`

const Content = styled.div`
  margin-bottom: 16px;
  width: 100%;
`

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #656565;
  font-weight: 500;
  line-height: 27px;
`

const Para = styled.p`
  font-size: 12px;
  color: #4A4A4A;
  line-height: 18px;
  width: 100%;
  display: block;
`

const ImageWrap = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 4px 0 0 4px;  
  img {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
`

const PostsWrap = styled.div`
  width: calc(100% - 48px);
  max-width: 970px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 88px;
  
  a:nth-of-type(2) {
    grid-row: span 1;
  }
  @media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`

const PostsWrapAlt = styled.div`
  width: calc(100% - 48px);
  max-width: 970px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 120px;

  @media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`

const Meta = styled.div`
  margin-top: auto;
`

const PostType = styled.p`
  font-weight: 600;
  margin: 0;
`

const MetaDetails = styled.p`
  color: #A5A5A5;
  margin: 0;  
`

const PublishDate = styled.span`
  margin-right: 8px;
`

const ReadTime = styled.span`
  margin-left: 8px;
`
const TitleBg = styled.div`
  background-color: #F5F5F5;
  padding: 180px 0 40px 0;
  margin-bottom: 80px;
`

const TitleContainer = styled.div`
  width: calc(100% - 48px);
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 120px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    // console.log(this.props.fetchPosts());
  }
  readTime(str) { 
    const words =  str.split(" ").length;
    const time = words / 200;
    return Math.ceil(time);
  }
  Date(dateStr) { 
    // const date = new Date(dateStr).toString();
    // const dateReformat = date.match(/^[a-zA-Z]{3} ([a-zA-Z]{3} \d{2} \d{4} \d{2}:\d{2})/);
    // return dateReformat

    function formatDate(date) {
      var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ];
    
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
    
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    
    return formatDate(new Date());  // show current date-time in console

  }
  

  renderFeatured() {
    return this.props.posts.slice(0, 2).map((post, index, readTime) => {
      return (
        <Spotlight to={"/posts/" + post.fields.slug} key={post.fields.slug + post.sys.id}>
          <ImageWrap>
            <Asset assetId={post.fields.thumbnail.sys.id} assetKey={index } />
          </ImageWrap>
          <ContentWrap>
            <Content>
              <Title>{post.fields.title}</Title>
              <Para>{post.fields.description}</Para>
            </Content>
            <Meta>
              <PostType>{post.fields.tags}</PostType>
              <MetaDetails><PublishDate>{this.Date(post.fields.date)}</PublishDate>  -  <ReadTime>{this.readTime(post.fields.content)} min read</ReadTime></MetaDetails>
            </Meta>
          </ContentWrap>
        </Spotlight>
      );
    });
  }

  renderPosts() {
    var postArray = this.props.posts
    var removePosts = postArray.splice(0, 2)

    return postArray.map((post, index, readTime) => {
      return (
        <Spotlight className="Spotlight" to={"/posts/" + post.fields.slug} key={post.sys.id}>
          <ImageWrap>
            <Asset assetId={post.fields.thumbnail.sys.id} assetKey={index} />
          </ImageWrap>
          <ContentWrap>
            <Content>
              <Title>{post.fields.title}</Title>
              <Para>{post.fields.description}</Para>
            </Content>
            <Meta>
              <PostType>{post.fields.tags}</PostType>
              <MetaDetails><PublishDate>{this.Date(post.fields.date)}</PublishDate>  -  <ReadTime>{this.readTime(post.fields.content)} min read</ReadTime></MetaDetails>
            </Meta>
          </ContentWrap>
        </Spotlight>
      );
    });
  }
  render() {
    return (
      <div>
        <HomeBanner />
        <SubscribeForm />
        <PostsWrapAlt>
          {this.renderPosts()}
        </PostsWrapAlt>
        <CtaPanel />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
