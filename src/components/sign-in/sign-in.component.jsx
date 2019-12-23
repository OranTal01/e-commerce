import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../database/firebase.utils';
import './sign-in.style.scss';

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
            console.error(error);
        }
        this.setState(() => ({ email: '', password: '' }))
    };

    handelChange = (e) => {
        const { value, name } = e.target
        this.setState(() => ({ [name]: value }))
    }

    render() {
        return (
            <div className="sign-in">
                <h2>already have a account</h2>
                <span>sign in with email and password</span>
                { this.state.error && <p className="error">{ this.state.error }</p> }
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
                    <div className="button">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton
                            isGoogleSignIn
                            onClick={ signInWithGoogle }
                            type="submit">
                            Sign In With Google
                            </CustomButton>
                    </div>
                </form>
            </div>
        );
    };
};

export default SignIn;