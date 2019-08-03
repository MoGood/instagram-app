import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed" aria-label="Home" title="Home">
            <i className="fas fa-home"></i>
            <span className="d-sm-none d-xs-block menu-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard" aria-label="Dashboard" title="Dashboard">
            <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: '25px', marginRight: '5px' }}
                title="You must have a Gravatar connected to your email to display an image"
              />{' '}
              <span className="d-sm-none d-xs-block menu-text">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profiles" aria-label="Profiles" title="Profiles">
            {' '}
            <i className="fas fa-users"></i>
            <span className="d-sm-none d-xs-block menu-text">Profiles</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link" aria-label="Log out" title="Log out">
            <i className="fas fa-sign-out-alt"></i>
            <span className="d-sm-none d-xs-block menu-text">Log out</span>
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles" aria-label="Profiles" title="Profiles">
            {' '}
            <i className="fas fa-users"></i>
            <span className="d-sm-none d-xs-block menu-text">Profiles</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" aria-label="Log in" title="Log in">
            <i className="fas fa-sign-in-alt"></i>
            <span className="d-sm-none d-xs-block menu-text">Log in</span>
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="logo"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);