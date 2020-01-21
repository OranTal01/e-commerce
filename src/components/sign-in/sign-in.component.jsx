import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {SignInContainer,SignInTitle,ButtonsBarContainer,ErrorSignIn} from './sign-in.styles';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignIn = ({ emailSignInStart, googleSignInStart, userError}) => {

  const [userCredentials, setUserCredentials] = useState({ email:'', password:'' })
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
    setUserCredentials({ email: '', password: '' });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <ErrorSignIn>{ userError && userError }</ErrorSignIn>
        <form onSubmit={ handleSubmit }>
          <FormInput
            name='email'
            type='email'
            handleChange={ handleChange }
            value={ email }
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={ password }
            handleChange={ handleChange }
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

const mapStateToProps = state => ({
  userError: state.user.error
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
