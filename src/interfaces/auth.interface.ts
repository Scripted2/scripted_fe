import React from "react";

export interface ISignUp {
    first_name?: string;
    last_name?: string;
    username?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
    favorite_categories_ids?: number[];
}

export interface IAuthForm {
    buttonText: string;
    bottomText?: string;
    linkText?: string;
    goTo: string;
    buttonAction?: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: ISignUp;
    errors?: IFormErrors;
    isLogIn?: boolean;
}

interface IFormErrors {
    first_name: boolean;
    last_name: boolean;
    username: boolean;
    email: boolean;
    password: boolean;
    confirm_password: boolean;
}

export interface ISignUpFirstStep {
    goToNextStep: () => void;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: ISignUp;
    errors: IFormErrors;
}

export interface ISignUpSecondStep {
    onSubmit: () => void;
    updateFavoriteCategories: (categories: number[]) => void;
}

export interface IDecodedToken {
    exp: number;
    sub?: string;
}