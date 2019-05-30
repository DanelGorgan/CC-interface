import React from 'react';

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import InputDropdown from '../core/InputDropdown'
import Input from '../core/Input'
import Button from "@material-ui/core/Button";

import { registerUser } from '../../actions/Register'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passwordOne: "",
      passwordTwo: "",
      role: "",
      errors: null
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = () => {
    const userData = {
      email: this.state.email,
      password: this.state.passwordOne,
      confirmPassword: this.state.passwordTwo,
      role: "Student"
    };

    this.props.registerUser(userData);
  }

  onChange = (value, key) => {
    this.setState({
      [key]: value,
    });
  };


  render() {
    if (this.props.register.isRegistered) {
      return <Redirect to="/signin" />;
    }
    return (
      <form className='sign-up-form' onSubmit={this.onSubmit}>

        <Input
          title='Email'
          value={this.state.email}
          onChange={(v) => this.onChange(v, 'email')}
        />

        <Input
          title='Parola'
          value={this.state.passwordOne}
          onChange={(v) => this.onChange(v, 'passwordOne')}
          type='password'
          placeholder='1 Parola Mai Grea $/#43'
        />

        <Input
          title='Confirma Parola'
          value={this.state.passwordTwo}
          onChange={(v) => this.onChange(v, 'passwordTwo')}
          type='password'
        />

        <Button
          onClick={this.onSubmit}
          className="sign-up-form__submit"
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: "30px", backgroundColor: '#0075ff' }}> Creaza Cont
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  register: state.register,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(SignUpForm);
