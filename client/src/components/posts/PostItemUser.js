import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePostUser, addLikeUser, removeLikeUser } from '../../actions/postActions';

class PostItemUser extends Component {

  onDeleteClick(id) {
    this.props.deletePostUser(id);
  }

  onLikeClick(id, handle) {
    this.props.addLikeUser(id, handle);
  }

  onUnlikeClick(id, handle) {
    this.props.removeLikeUser(id, handle);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth } = this.props;

    return (
      <div className="card card-body mb-3 post-item">
        <div className="row">
          <div className="col-md-2">
            <Link to={`/profile/${post.handle}`}>
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
              <br />
              <p className="text-center comment-handle">{post.handle}</p>
            </Link>
          </div>
          <div className="col-md-10">
            <img src={post.image} alt="" />
            <p className="lead">{post.text}</p>
            { auth.isAuthenticated ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id, post.handle)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('text-secondary fas fa-thumbs-up', {
                      'text-info': this.findUserLike(post.likes)
                    })}
                  />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id, post.handle)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  View or Add Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1 float-right"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItemUser.propTypes = {
  deletePostUser: PropTypes.func.isRequired,
  addLikeUser: PropTypes.func.isRequired,
  removeLikeUser: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePostUser, addLikeUser, removeLikeUser })(
  PostItemUser
);