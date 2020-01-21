import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle, ErrorSignUp } from './sign-up.styles';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignUp = ({ signUpStart, userError})=> {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error:''
  });

  const { displayName, email, password, confirmPassword, error } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: "passwords don't match"
      })
      return;
    }
    signUpStart(email, password, displayName )
    setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <ErrorSignUp>{ userError && userError }</ErrorSignUp>
      <ErrorSignUp>{ error && error }</ErrorSignUp>
        <form className='sign-up-form' onSubmit={ handleSubmit }>
          <FormInput
            type='text'
            name='displayName'
            value={ displayName }
            onChange={ handleChange }
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={ email }
            onChange={ handleChange }
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={ password }
            onChange={ handleChange }
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={ confirmPassword }
            onChange={ handleChange }
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }


const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName}))
});

const mapStateToProps = state => ({
  userError: state.user.error
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
