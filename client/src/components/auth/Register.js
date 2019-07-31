import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {classnames} from 'classnames';
import {registerUser} from '../../actions/authActions';
import {connect} from 'react-redux';
import { stat } from 'fs';


class Register extends Component {
  constructor(){
      super();
      this.state = {
          handle:'',
          email:'',
          password:'',
          password2:'',
          errors:{}
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

    onChange(e)
    {
        this.setState({[e.target.handle]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newUser ={
            handle: this.state.handle,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);

        
    }
   componentWillReceiveProps(nextProps){
     if(nextProps.errors){
       this.setState({errors: nextProps.errors});
     }
   }

    render() {
      const {user} = this.props.auth;
        const {errors} = this.state;
        return (
            <div className="register">
              {user? user.name : null}
            <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your Instagram account</p>
            <form onSubmit={this.onSubmit} noValidate>
              <div className="form-group">
                <input type="text" className={classnames('form-control form-control-lg',{'is-invalid':errors.handle})}placeholder="Username" name="handle" 
                value={this.state.handle}
                onChange={this.onChange}
                required />
                {errors.handle && (
                    <div className="invalid-feedback">
                    {errors.handle}
                    </div>
                )}
              </div>

              <div className="form-group">
                <input type="email" className={classnames('form-control form-control-lg',{'is-invalid':errors.email})} placeholder="Email Address" name="email" value={this.state.email}
                onChange={this.onChange} />
                <small className="form-text text-muted">email </small>
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group">
                <input type="password" className={classnames('form-control form-control-lg',{'is-invalid':errors.password})} placeholder="Password" name="password" value={this.state.password}
                onChange={this.onChange} />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password}
                  </div>
                )}

              </div>
              <div className="form-group">
                <input type="password" className={classnames('form-control form-control-lg',{'is-invalid':errors.password2})} placeholder="Confirm Password" name="password2" value={this.state.password2}
                onChange={this.onChange} />
                {errors.password2 && (
                  <div className="invalid-feedback">
                    {errors.password2}
                  </div>
                )}
              </div>
              
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps =(state) => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, {registerUser})(Register);
