import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../database/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import './sign-up.style.scss';

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
                email: ''
            });
        } catch (error) {
            console.error(error);
        }
    };


    render() {
        const { displayName, email, password, confirmPassword, error } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I don't have a account</h2>
                <span>Sign up with your email and password</span>
                { error && <p className="error">{ error }</p> }
                <form
                    onSubmit={ this.handelFormSubmission }
                    className="sign-up-form">
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
            </div>
        );
    };
};

export default SignUp;
