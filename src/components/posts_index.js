import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import TitleBlock from './titleBlock';

import styled from 'styled-components';

import { fetchPosts } from '../actions/index';
import Asset from './asset';


const Button = styled(Link)`
  color: orange;
`

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    // console.log(this.props.fetchPosts());
  }
  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <section key={post.sys.id}>
          <div className="content">
            <h2>{post.fields.title}</h2>
            <div className="major">
              <TextTruncate
                  line={4}
                  truncateText="…"
                  text={post.fields.description}
                  />
            </div>
            <br />
            <Button to={"/posts/" + post.fields.slug} className="button big wide smooth-scroll-middle">Learn more</Button>
          </div>
          <div className="image">
            <Asset assetId={post.fields.featuredImage.sys.id} />
          </div>
        </section>
      );
    });
  }
  render() {
    return (
      <div>
        <TitleBlock />
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
