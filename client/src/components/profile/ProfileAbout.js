import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import PostFeed from '../posts/PostFeed';
import { getPostsByUser } from '../../actions/postActions';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';

class ProfileAbout extends Component {
  componentDidMount() {
    this.props.getPostsByUser(this.props.profile.user.handle);
  }

  render() {

    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <hr />
              {isEmpty({postContent}) ? (
                  ''
                ) : (
                  <span>{postContent}</span>
              )}
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
  getPostsByUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPostsByUser })(ProfileAbout);
