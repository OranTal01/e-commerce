import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../fireBase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, SignUpTitle, SignUpError } from './sign-up.style';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    }
    handelChange = (e) => {
        const { value, name } = e.target
        this.setState(() => ({ [name]: value }))
    }

    handelFormSubmission = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            this.setState(() => ({
                error: 'Password don\'t match, Password should be 6 characters'
            }))
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            this.setState(() => ({ error: error.message }))
            console.error(error);
        }
    };


    render() {
        const { displayName, email, password, confirmPassword, error } = this.state
        return (
            <SignUpContainer>
                <SignUpTitle>I don't have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                { error && <SignUpError>{ error }</SignUpError> }
                <form
                    onSubmit={ this.handelFormSubmission }>
                    <FormInput
                        handelChange={ this.handelChange }
                        label="Display Name"
                        type="text"
                        name="displayName"
                        value={ displayName }
                        required
                    />
                    <FormInput
                        handelChange={ this.handelChange }
                        label="Email"
                        type="email"
                        name="email"
                        value={ email }
                        required
                    />
                    <FormInput
                        autoComplete="off"
                        handelChange={ this.handelChange }
                        label="Password"
                        type="password"
                        name="password"
                        value={ password }
                        required
                    />
                    <FormInput
                        autoComplete="off"
                        handelChange={ this.handelChange }
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={ confirmPassword }
                        required
                    />
                    <CustomButton
                        type="submit">
                        Sign Up
                    </CustomButton>
                </form>
            </SignUpContainer>
        );
    };
};

export default SignUp;
