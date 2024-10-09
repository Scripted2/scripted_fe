import React from "react";

export interface ISignUp {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IAuthForm {
    buttonText: string;
    bottomText?: string;
    linkText?: string;
    goTo: string;
    buttonAction?: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: ISignUp;
}

export interface ISignUpFirstStep {
    goToNextStep: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: ISignUp;
}

export interface ISignUpSecondStep {
    onSubmit: () => void;
}