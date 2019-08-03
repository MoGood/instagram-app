import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="landing-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="row">
                  <div className="col-md-6 app-image d-sm-none d-md-block"></div>
                  <div className="col-md-4 pull-left">
                    <div className="sign-in">
                      <h1><span className="sr-only">Instagram</span></h1>
                      <p className="lead">
                        {' '}
                        A simple, fun &amp; creative way to capture, edit &amp; share photos, videos &amp; messages with friends &amp; family.
                      </p>
                      <hr />
                      <Link to="/register" className="btn btn-md btn-info mr-2">
                        Sign Up
                      </Link>
                      <Link to="/login" className="btn btn-md btn-light">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);