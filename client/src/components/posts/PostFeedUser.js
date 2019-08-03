import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItemUser from './PostItemUser';

class PostFeedUser extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <PostItemUser key={post._id} post={post} />);
  }
}

PostFeedUser.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeedUser;