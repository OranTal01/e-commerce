import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };


    handelSubmit = (e) => {
        e.preventDefault();
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
                <form onSubmit={ this.handelSubmit }>
                    <FormInput
                        handelChange={ this.handelChange }
                        required
                        type="email"
                        name="email"
                        label="Email"
                        value={ this.state.email } />
                    <FormInput
                        handelChange={ this.handelChange }
                        required
                        type="password"
                        name="password"
                        label="Password"
                        value={ this.state.password } />
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    };
};

export default SignIn;
