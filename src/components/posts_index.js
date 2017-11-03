import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import TitleBlock from './titleBlock';
import LogoGrid from './logoGrid';
import _ from 'lodash';
import styled from 'styled-components';

import { fetchPosts } from '../actions/index';
import Asset from './asset';


const Spotlight = styled(Link)`
  text-decoration: none;
  display: flex;
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
          border-left: 1px solid #C5C5C5;
          border-top: 0;
          border-radius: 0 0 4px 4px;
          > div {
            width: 100%;
          }
        }
      }
    }
  }
`

const ContentWrap = styled.div`
  width: 100%;
  padding: 32px 24px;
  box-sizing: border-box;
  border: 1px solid #C5C5C5;
  border-left: 0;
  border-radius: 0 4px 4px 0;  
  display: flex;
  flex-flow: row wrap;
`

const Content = styled.div`
  margin-bottom: 16px;
  width: 100%;
`

const Title = styled.h2`
  font-size: 20px;
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
    z-index: -1;
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
    return this.props.posts.slice(0, 4).map((post, index, readTime) => {
      return (
        <Spotlight to={"/posts/" + post.fields.slug} key={post.sys.id}>
          <ImageWrap>
            <Asset assetId={post.fields.featuredImage.sys.id} />
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
    var removePosts = postArray.splice(0, 4)

    return postArray.map((post, index, readTime) => {
      return (
        <Spotlight className="Spotlight" to={"/posts/" + post.fields.slug} key={post.sys.id}>
          <ImageWrap>
            <Asset assetId={post.fields.featuredImage.sys.id} />
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
        <TitleBlock />
        <PostsWrap>
          {this.renderFeatured()}
        </PostsWrap>
        <LogoGrid />
        <PostsWrapAlt>
          {this.renderPosts()}
        </PostsWrapAlt>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
