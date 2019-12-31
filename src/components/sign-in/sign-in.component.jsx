import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../fireBase/firebase.utils';
import { SignInContainer, SignInTitle, ButtonContainer, SignInError } from './sign-in.style';
class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    handelSubmit = async (e) => {

        e.preventDefault();
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            this.setState(() => ({ error: error.message }))
        }
        this.setState(() => ({ email: '', password: '' }))
    };

    handelChange = (e) => {
        const { value, name } = e.target
        this.setState(() => ({ [name]: value }))
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>already have a account</SignInTitle>
                <span>sign in with email and password</span>
                { this.state.error && <SignInError>{ this.state.error }</SignInError> }
                <form onSubmit={ this.handelSubmit }>
                    <FormInput
                        autoComplete="on"
                        handelChange={ this.handelChange }
                        required
                        type="email"
                        name="email"
                        label="Email"
                        value={ this.state.email } />
                    <FormInput
                        handelChange={ this.handelChange }
                        autoComplete="on"
                        required
                        type="password"
                        name="password"
                        label="Password"
                        value={ this.state.password } />
                    <ButtonContainer>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton
                            isGoogleSignIn
                            onClick={ signInWithGoogle }
                            type="submit">
                            Sign In With Google
                            </CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        );
    };
};

export default SignIn;