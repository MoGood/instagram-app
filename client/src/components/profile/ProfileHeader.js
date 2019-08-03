import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body mb-3">
            <div className="row">
              <div className="col-4 col-md-3 mt-3">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
              <div className="col-6">
                <h1 className="display-4">{profile.user.handle}</h1>
                <h4>{profile.name}</h4>
                {isEmpty(profile.website) ? null : (
                  <a
                  href={profile.website}
                  target="_blank" rel="noopener noreferrer"
                >
                  <h6>{profile.website}</h6>
                  </a>
                )}
                {isEmpty(profile.bio) ? (
                  <span></span>
                ) : (
                  <p className="lead">
                    <span>{profile.bio}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
