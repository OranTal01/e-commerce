import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInAdSignUpPageContainer } from './sign-in-and-sign-up.style';

const SignInAndSignUp = () => {
    return (
        <SignInAdSignUpPageContainer>
            <SignIn />
            <SignUp />
        </SignInAdSignUpPageContainer>
    );
};

export default SignInAndSignUp